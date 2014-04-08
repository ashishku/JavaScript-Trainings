/*global _*/
define(['underscore','backbone', 'viewMap'], function(_, Backbone, viewMap) {
  return {
    init: function() {
      function defaultRoute() {
        require(['views/IndexView'], function(IndexView) {
          var indexView = new IndexView();
          indexView.render();
        });
        $('.pager').hide();
      }

      var AppRouter = Backbone.Router.extend({
        routes: {
          "side/:id": "showSlide",
          "*actions": "showIndex"
        }
      });

      var appRouter = new AppRouter();
      appRouter.on('route:showSlide', function (id) {
        if(viewMap[id] && viewMap[id].view) {
          var viewUrl = 'views/' + viewMap[id].view + 'View';
          require([viewUrl], function(View) {
            var view = new View();
            view.render(viewMap[id].data, viewMap[id].deps);
          });

          $('.pager').show();
          $('.previous > a').attr("href", '#side/' + viewMap[id].previous);
          $('.next > a').attr("href", '#side/' + viewMap[id].next);
        }
        else{
          defaultRoute();
        }
      });

      appRouter.on('route:showIndex', defaultRoute);

      Backbone.history.start();
    }
  };
});