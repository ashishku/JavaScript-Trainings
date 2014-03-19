define(['backbone', 'viewMap'], function(Backbone, viewMap) {
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
                    view.render(viewMap[id].data);
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