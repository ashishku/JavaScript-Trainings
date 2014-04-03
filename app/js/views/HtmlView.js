define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var HtmlView = Backbone.View.extend({
        el: '#views',
        render: function(data, deps){
            var that = this;
            var url = 'text!partials/' + data.template;
            require([url], function(template) {
                var html = _.template(template, data);
                that.$el.html( html );

                if(deps.length > 0) {
                  require(deps, function() { });
                }
            });
        },
    });

    return HtmlView;
});