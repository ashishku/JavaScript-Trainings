define([], function() {
  var Canvas = function(id) {
    var canvas = document.getElementById(id);

    this.dimensions = {
      get height() {
        return canvas.height;
      },
      get width() {
        return canvas.width;
      }
    };
    this.context = canvas.getContext('2d');
  };
  Canvas.prototype = {
    constructor: Canvas,
    
    clear: function(x1, y1, x2, y2) {
      x1 = x1 || 0;
      y1 = y1 || 0;
      x2 = x2 || this.dimensions.width;
      y2 = y2 || this.dimensions.height;

      return this.context.clearRect(x1, y1, x2, y2);
    },
    
    drawImage: function (i, x, y) {
      this.context.drawImage(i, x, y);
    },
    
    drawTree: function() {
      
    }
  };

  return Canvas;
});