require.config({
    baseUrl: 'js',
    paths: {
        'backbone'  : 'libs/backbone/backbone-min',
        'bootstrap' : 'libs/bootstrap/bootstrap.min',
        'jquery'    : 'libs/jquery/jquery-2.1.0.min',
        'text'      : 'libs/require/text',
        'underscore': 'libs/underscore/underscore-min',

        'partials'  : '../partials',
        
        'sessions'  : 'sessions'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery'],
        }
    },
    deps:['backbone', 'bootstrap']
});

// Start the main app logic.
require(['app'], function   (App) {
    App.init();
});