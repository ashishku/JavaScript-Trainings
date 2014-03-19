define(['router'], function(Router) {
    return {
        init: function() {
            console.log('app init started');
            Router.init();
            console.log('app init finished');
        }
    };
});