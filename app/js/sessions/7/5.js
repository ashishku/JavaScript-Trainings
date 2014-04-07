/*global Canvas*/
define(['jquery', 'sessions/canvas'], function($, Canvas) {
  var c  = new Canvas("canvas"),
      h  = c.dimensions.height,
      w  = c.dimensions.width,
      uh = h * 0.9,
      uw = w * 0.9,
      ph = h * 0.05,
      pw = w * 0.05;

  var rows  = 5,
      rowH  = uh / rows,
      cols  = 7,
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
    function drawRect(i, j, text) {
      var grd = c.context.createLinearGradient(cells[i][j].x1, cells[i][j].y1, cells[i][j].x2, cells[i][j].y2);
      grd.addColorStop(0, '#F4F201');
      grd.addColorStop(0.8, '#E4C700');
      grd.addColorStop(1, 'rgba(228,199,0,0)');

      c.context.beginPath();
      c.context.fillStyle= grd;
      c.context.rect(cells[i][j].x1 - 5, cells[i][j].y1, cells[i][j].w + 10, cells[i][j].h);
      c.context.fill();

      var x = cells[i][j].x,
          y = cells[i][j].y;

      c.context.fillStyle="black";
      c.context.textAlign = 'center';
      c.context.textBaseline = 'middle';
      c.context.font="8pt Calibri";
      c.context.fillText(text, x, y);
    }
    
    function drawArrowV(x1, y1, x2, y2, col, dir) {
      var stlye = col ? col : "blue";
      var d = dir ? 7 : -7;
      c.context.beginPath();
      c.context.moveTo(x1, y1);
      c.context.lineTo(x2, y2);

      c.context.lineTo(x2 - 2, y2 + d);
      c.context.lineTo(x2 + 2, y2 + d);
      c.context.lineTo(x2, y2);
      
      c.context.strokeStyle=stlye;
      c.context.stroke();
    }
    function drawArrowH(x1, y1, x2, y2, col, dir) {
      var stlye = col ? col : "blue";
      var d = dir ? 7 : -7;
      c.context.beginPath();
      c.context.moveTo(x1, y1);
      c.context.lineTo(x2, y2);

      c.context.lineTo(x2 + d, y2 - 2);
      c.context.lineTo(x2 + d, y2 + 2);
      c.context.lineTo(x2, y2);
      
      c.context.strokeStyle=stlye;
      c.context.stroke();
    }
    function drawArrow(x1, y1, x2, y2, col, dir) {
      var stlye = col ? col : "blue";
      var d = dir ? 7 : -7;
      var y = ((y1 + y2) / 2 - 5);
      c.context.beginPath();
      c.context.moveTo(x1, y1);
      c.context.lineTo(x1, y);
      c.context.lineTo(x2, y);
      c.context.lineTo(x2, y2);

      c.context.lineTo(x2 - 2, y2 + d);
      c.context.lineTo(x2 + 2, y2 + d);
      c.context.lineTo(x2, y2);
      
      c.context.strokeStyle=stlye;
      c.context.stroke();
    }
    function drawLine(x1, y1, x2, y2, col) {
      var stlye = col ? col : "blue";
      c.context.beginPath();
      c.context.moveTo(x1, y1);
      c.context.lineTo(x2, y2);
      c.context.strokeStyle=stlye;
      c.context.stroke();
    }
    return {
      rect: drawRect,
      arrowV: drawArrowV,
      arrowH: drawArrowH,
      arrow: drawArrow,
      line: drawLine
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

    var c40 = cells[4][0];
    var c26 = cells[2][6];
    var c24 = cells[2][4];
    var c22 = cells[2][2];
    var c20 = cells[2][0];
    var c06 = cells[0][6];
    var c04 = cells[0][4];
    var c02 = cells[0][2];
    var c00 = cells[0][0];

    function case0() {
      c.clear();
      $('#actions_log li').hide();
      $('#actions_log li').eq(0).show();
    }
    function case1() {
      case0();

      draw.rect(4, 0, "Body");
      draw.rect(2, 0, "H1");
      draw.rect(0, 0, "#text");
      draw.rect(2, 2, "P");
      draw.rect(0, 2, "#text");
      draw.rect(2, 4, "H2");
      draw.rect(0, 4, "#text");
      draw.rect(2, 6, "P");
      draw.rect(0, 6, "#text");

      draw.arrowV(c40.x - 10, c40.y2, c20.x - 10, c20.y1);

      draw.arrow(c40.x + 10, c40.y2, c26.x + 10, c26.y1, "firebrick");

      draw.arrowV(c20.x - 10, c20.y2, c00.x - 10, c00.y1);
      draw.arrowV(c20.x + 10, c20.y2, c00.x + 10, c00.y1, "firebrick");

      draw.arrowV(c22.x - 10, c22.y2, c02.x - 10, c02.y1);
      draw.arrowV(c22.x + 10, c22.y2, c02.x + 10, c02.y1, "firebrick");

      draw.arrowV(c24.x - 10, c24.y2, c04.x - 10, c04.y1);
      draw.arrowV(c24.x + 10, c24.y2, c04.x + 10, c04.y1, "firebrick");

      draw.arrowV(c26.x - 10, c26.y2, c06.x - 10, c06.y1);
      draw.arrowV(c26.x + 10, c26.y2, c06.x + 10, c06.y1, "firebrick");

      $('#actions_log li').eq(1).show();
    }
    function case2() {
      case0();
      case1();

      draw.arrowH(c22.x1 - 5, c22.y + 7, c20.x2 + 5, c20.y + 7, "green", true);
      draw.arrowH(c20.x2 + 5, c20.y - 7, c22.x1 - 5, c22.y - 7, "violet");

      draw.arrowH(c24.x1 - 5, c24.y + 7, c22.x2 + 5, c22.y + 7, "green", true);
      draw.arrowH(c22.x2 + 5, c22.y - 7, c24.x1 - 5, c24.y - 7, "violet");

      draw.arrowH(c26.x1 - 5, c26.y + 7, c24.x2 + 5, c24.y + 7, "green", true);
      draw.arrowH(c24.x2 + 5, c24.y - 7, c26.x1 - 5, c26.y - 7, "violet");
      $('#actions_log li').eq(2).show();
    }
    function case3() {
      case0();
      case1();
      case2();

      draw.arrowV(c00.x, c00.y1, c20.x, c20.y2, "black", true);
      draw.arrowV(c20.x, c20.y1, c40.x, c40.y2, "black", true);
      draw.arrowV(c02.x, c02.y1, c22.x, c22.y2, "black", true);
      draw.arrowV(c04.x, c04.y1, c24.x, c24.y2, "black", true);
      draw.arrowV(c06.x, c06.y1, c26.x, c26.y2, "black", true);
      
      draw.line(c26.x, c26.y1, c26.x, c26.y1 - 10, "black");
      draw.line(c24.x, c24.y1, c24.x, c24.y1 - 10, "black");
      draw.line(c22.x, c22.y1, c22.x, c22.y1 - 10, "black");
      draw.line(c20.x, c22.y1 - 10, c26.x, c26.y1 - 10, "black");

      $('#actions_log li').eq(3).show();
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

  return function() {
    $(document).keydown(onKeyPress);
  };
});