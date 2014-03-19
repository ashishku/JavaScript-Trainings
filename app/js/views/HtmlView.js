define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var HtmlView = Backbone.View.extend({
        el: '#views',
        render: function(data){
            var that = this;
            var url = 'text!partials/' + data.template;
            require([url], function(template) {
                var html = _.template(template, data);
                that.$el.html( html );
            });
        },
    });

    return HtmlView;
});