/*global _*/
define(['underscore','backbone', 'viewMap'], function(_, Backbone, viewMap) {
    return {
        init: function() {
            console.log('router init started');

            var AppRouter = Backbone.Router.extend({
                routes: {
                    "side/:id": "showSlide",
                    "*actions": "showIndex"
                }
            });

            var appRouter = new AppRouter();
            appRouter.on('route:showSlide', function (id) {
                console.log('Show slide ', id);

                var viewUrl = 'views/' + viewMap[id].view + 'View';
                require([viewUrl], function(View) {
                    var view = new View();
                    view.render(viewMap[id].data, viewMap[id].deps);
                });

                $('.pager').show();
                $('.previous > a').attr("href", '#side/' + viewMap[id].previous);
                $('.next > a').attr("href", '#side/' + viewMap[id].next);
            });
            appRouter.on('route:showIndex', function () {
                console.log('Show Index');
                require(['views/IndexView'], function(IndexView) {
                    var indexView = new IndexView();
                    indexView.render();
                });
                $('.pager').hide();
            });

            Backbone.history.start();

            console.log('router init finished');
        }
    };
});