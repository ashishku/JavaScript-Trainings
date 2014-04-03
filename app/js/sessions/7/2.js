/*global Canvas*/
define(['jquery', 'sessions/canvas'], function($, Canvas) {
  var c  = new Canvas("canvas"),
      h  = c.dimensions.height,
      w  = c.dimensions.width,
      uh = h * 0.9,
      uw = w * 0.9,
      ph = h * 0.05,
      pw = w * 0.05;

  var rows  = 3,
      rowH  = uh / rows,
      cols  = 4,
      colW  = uw / cols,
      rad   = (rowH > colW) ? colW / 2 : rowH / 2,
      cells = [],
      i, j;

  (function(cells) {
    var row, col;
    for(i = 0; i < rows; i++) {
      row = [];
      for(j = 0; j < cols; j++) {
        col = {
          x1: (colW * j) + pw,
          y1: (rowH * i) + ph,
          x2: (colW * (j + 1)) + pw,
          y2: (rowH * (i + 1)) + ph,
          x : (colW * j) + pw + (colW * 0.5),
          y : (rowH * i) + ph + (rowH * 0.5),
          w : colW,
          h : rowH
        };
        row.push(col);
      }
      cells.unshift(row);
    }
  }(cells));

  var draw = (function(cells) {
    function _preDraw(i, j, grd) {
      c.context.fillStyle= grd;
      c.context.beginPath();
    }
    
    function _postDraw(i, j, text) {
      c.context.fill();

      var x = cells[i][j].x,
          y = cells[i][j].y;

      c.context.fillStyle="black";
      c.context.textAlign = 'center';
      c.context.textBaseline = 'middle';
      c.context.font="8pt Calibri";
      c.context.fillText(text, x, y);
    }
    
    function drawCircle(i, j, text) {
      var grd = c.context.createRadialGradient(
                  cells[i][j].x - 5, cells[i][j].y + 5, rad * 1.5, 
                  cells[i][j].x - 5, cells[i][j].y + 10, rad * 0.75);
      grd.addColorStop(0, '#004CB3');
      grd.addColorStop(1, '#8ED6FF');

      _preDraw(i, j, grd);
      
      c.context.arc(cells[i][j].x, cells[i][j].y, rad + 5, 0, 2*Math.PI);
      
      _postDraw(i, j, text)
    }

    function drawArrowH(c1i, c1j, c1x, c1y, c2i, c2j, c2x, c2y, f) {
      c.context.beginPath();
      c.context.moveTo(cells[c1i][c1j][c1x] + (5 * f),             cells[c1i][c1j][c1y]);
      c.context.lineTo(cells[c2i][c2j][c2x] - (5 * f),             cells[c2i][c2j][c2y]);

      c.context.lineTo(cells[c2i][c2j][c2x] + (5 * f) + (10 * f),  cells[c2i][c2j][c2y] + 2);
      c.context.lineTo(cells[c2i][c2j][c2x] + (5 * f) + (10 * f),  cells[c2i][c2j][c2y] - 2);
      c.context.lineTo(cells[c2i][c2j][c2x] + (5 * f),             cells[c2i][c2j][c2y]);
      
      c.context.stroke();
    }

    function drawArrowV(c1i, c1j, c1x, c1y, c2i, c2j, c2x, c2y, f) {
      c.context.beginPath();
      c.context.moveTo(cells[c1i][c1j][c1x],       cells[c1i][c1j][c1y] - (5 * f));
      c.context.lineTo(cells[c2i][c2j][c2x],       cells[c2i][c2j][c2y] + (5 * f));

      c.context.lineTo(cells[c2i][c2j][c2x] + 2,   cells[c2i][c2j][c2y] + (5 * f) + (10 * f));
      c.context.lineTo(cells[c2i][c2j][c2x] - 2,   cells[c2i][c2j][c2y] + (5 * f) + (10 * f));
      c.context.lineTo(cells[c2i][c2j][c2x],       cells[c2i][c2j][c2y] + (5 * f));
      
      c.context.stroke();
    }

    return {
      circle     : drawCircle,
      horizontal : drawArrowH,
      vertical   : drawArrowV
    };
  }(cells));


  var onKeyPress = (function(draw) {
    var state = 0;

    function forward() {
      state = (state < 10) ? state + 1 : 10;
      render();
    }
    
    function back() {
      state = (state > 0) ? state - 1 : 0;
      render();
    }

    var KEY_CODES = {
      32: forward, 37: back, 38: forward, 39: forward, 40: back,
    };

    function case0() {
      c.clear();
      $('#actions_log li').hide();
      $('#actions_log li').eq(0).show();
    }
    function case1() {
      case0();

      draw.circle(0, 2, "Event");

      $('#actions_log li').eq(1).show();
    }
    function case2() {
      case0();
      case1();

      draw.horizontal(0, 2, 'x1', 'y', 0, 0, 'x2', 'y', 1);
      draw.circle(0, 0, "Script");

      $('#actions_log li').eq(2).show();
    }
    function case3() {
      case0();
      case1();
      case2();

      draw.vertical(0, 0, 'x', 'y1', 2, 0, 'x', 'y2', 1);
      draw.circle(2, 0, "Re-Flow");

      $('#actions_log li').eq(3).show();
    }
    function case4() {
      case0();
      case1();
      case2();
      case3();

      draw.horizontal(2, 0, 'x2', 'y', 2, 2, 'x1', 'y', -1);
      draw.circle(2, 2, "Paint");

      $('#actions_log li').eq(4).show();
    }
    function case5() {
      case0();
      case1();
      case2();
      case3();
      case4();

      draw.vertical(2, 2, 'x', 'y2', 0, 2, 'x', 'y1', -1);

      $('#actions_log li').eq(5).show();
    }
    function render() {
      switch (state) {
        case 0:
          return case0();
        case 1:
          return case1();
        case 2:
          return case2();
        case 3:
          return case3();
        case 4:
          return case4();
        case 5:
          return case5();
      }
    }

    return function(e) {
      var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
      if (KEY_CODES[keyCode]) {
        e.preventDefault();
        KEY_CODES[keyCode]();
      }
    };
  }(draw));
  
  $('#actions_log li').hide();
  $('#actions_log li').eq(0).show();

  document.onkeydown = onKeyPress;
});