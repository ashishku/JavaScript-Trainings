/*global Canvas*/
define(['jquery', 'sessions/canvas'], function($, Canvas) {
  var c  = new Canvas("canvas"),
      h  = c.dimensions.height,
      w  = c.dimensions.width,
      uh = h * 0.9,
      uw = w * 0.9,
      ph = h * 0.05,
      pw = w * 0.05;

  var rows  = 4,
      rowH  = uh / rows,
      cols  = 9,
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

    function drawRect(i, j, text) {
      var grd = c.context.createLinearGradient(cells[i][j].x1, cells[i][j].y1, cells[i][j].x2, cells[i][j].y2);
      grd.addColorStop(0, '#F4F201');
      grd.addColorStop(0.8, '#E4C700');
      grd.addColorStop(1, 'rgba(228,199,0,0)');

      _preDraw(i, j, grd);
      
      c.context.rect(cells[i][j].x1 - 5, cells[i][j].y1, cells[i][j].w + 10, cells[i][j].h);
      
      _postDraw(i, j, text)
    }

    function drawR2C(j) {
      c.context.beginPath();
      c.context.moveTo(cells[3][j].x2 + 5,  cells[3][j].y);
      c.context.lineTo(cells[0][j+1].x,     cells[3][j].y);
      c.context.lineTo(cells[0][j+1].x,     cells[0][j+1].y1 - 2);

      c.context.lineTo(cells[0][j+1].x + 1, cells[0][j+1].y1 - 10);
      c.context.lineTo(cells[0][j+1].x - 1, cells[0][j+1].y1 - 10);
      c.context.lineTo(cells[0][j+1].x,     cells[0][j+1].y1 - 2);
      
      c.context.stroke();
    }

    function drawC2R(j) {
      c.context.beginPath();
      c.context.moveTo(cells[0][j].x2 + 5,  cells[0][j].y);
      c.context.lineTo(cells[3][j+1].x,     cells[0][j].y);
      c.context.lineTo(cells[3][j+1].x,     cells[3][j+1].y2);

      c.context.lineTo(cells[3][j+1].x - 1, cells[3][j+1].y2 + 8);
      c.context.lineTo(cells[3][j+1].x + 1, cells[3][j+1].y2 + 8);
      c.context.lineTo(cells[3][j+1].x,     cells[3][j+1].y2);
      
      c.context.stroke();
    }

    function drawLoopBack() {
      c.context.beginPath();
      c.context.moveTo(cells[3][3].x,       cells[3][3].y1 - 1);
      c.context.lineTo(cells[3][3].x,       cells[3][3].y1 - 7);
      c.context.lineTo(cells[3][1].x,       cells[3][3].y1 - 7);
      c.context.lineTo(cells[3][1].x,       cells[3][1].y1 - 1);

      c.context.lineTo(cells[3][1].x + 1,   cells[3][1].y1 - 5);
      c.context.lineTo(cells[3][1].x - 1,   cells[3][1].y1 - 5);
      c.context.lineTo(cells[3][1].x,       cells[3][1].y1 - 2);
      
      c.context.stroke();
    }

    function drawEntry() {
      c.context.beginPath();
      c.context.moveTo(0,                   cells[0][0].y);
      c.context.lineTo(cells[0][0].x1 - 6,  cells[0][0].y);

      c.context.lineTo(cells[0][0].x1 - 12, cells[0][0].y - 1);
      c.context.lineTo(cells[0][0].x1 - 12, cells[0][0].y + 1);
      c.context.lineTo(cells[0][0].x1 - 6, cells[0][0].y);
      
      c.context.stroke();
    }

    return {
      circle  : drawCircle,
      rect    : drawRect,
      r2c     : drawR2C,
      c2r     : drawC2R,
      loopBack: drawLoopBack,
      entry   : drawEntry
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

      draw.entry();
      draw.circle(0, 0, "Url");

      $('#actions_log li').eq(1).show();
    }
    function case2() {
      case0();
      case1();

      draw.c2r(0);
      draw.rect(3, 1, "Fetch");

      $('#actions_log li').eq(2).show();
    }
    function case3() {
      case0();
      case1();
      case2();

      draw.r2c(1);
      draw.circle(0, 2, "Cache");

      $('#actions_log li').eq(3).show();
    }
    function case4() {
      case0();
      case1();
      case2();
      case3();

      draw.c2r(2);
      draw.rect(3, 3, "Parse");

      $('#actions_log li').eq(4).show();
    }
    function case5() {
      case0();
      case1();
      case2();
      case3();
      case4();

      draw.loopBack();

      $('#actions_log li').eq(5).show();
    }
    function case6() {
      case0();
      case1();
      case2();
      case3();
      case4();
      case5();

      draw.r2c(3);
      draw.circle(0, 4, "Tree");

      $('#actions_log li').eq(6).show();
    }
    function case7() {
      case0();
      case1();
      case2();
      case3();
      case4();
      case5();
      case6()

      draw.c2r(4);
      draw.rect(3, 5, "Flow");

      $('#actions_log li').eq(7).show();
    }
    function case8() {
      case0();
      case1();
      case2();
      case3();
      case4();
      case5();
      case6();
      case7();

      draw.r2c(5);
      draw.circle(0, 6, "List");

      $('#actions_log li').eq(8).show();
    }
    function case9() {
      case0();
      case1();
      case2();
      case3();
      case4();
      case5();
      case6();
      case7();
      case8();

      draw.c2r(6);
      draw.rect(3, 7, "Paint");

      $('#actions_log li').eq(9).show();
    }
    function case10() {
      case0();
      case1();
      case2();
      case3();
      case4();
      case5();
      case6();
      case7();
      case8();
      case9();

      draw.r2c(7);
      draw.circle(0, 8, "Pixel");

      $('#actions_log li').eq(10).show();
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
        case 6:
          return case6();
        case 7:
          return case7();
        case 8:
          return case8();
        case 9:
          return case9();
        case 10:
          return case10();
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