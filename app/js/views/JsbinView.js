define(['jquery', 'underscore', 'backbone', 'text!partials/jsBinView.html'], function($, _, Backbone, template) {
    var JsbinView = Backbone.View.extend({
        el: '#views',
        render: function(data){
            var html = _.template(template, data);
            this.$el.html( html );
        },
    });

    return JsbinView;
});