define(['jquery', 'underscore', 'backbone', 'text!partials/indexView.html'], function($, _, Backbone, template) {
    var IndexView = Backbone.View.extend({
        el: '#views',
        render: function(){
            var slides = {
                sessions: [
                    { url: '#side/session1', title: 'Intoduction to JavaScript', topics:[
                        { url: '#side/session1_1', title: 'Introduction' },
                        { url: '#side/session1_2', title: 'Lexical Structure' },
                        { url: '#side/session1_4', title: 'Variables and Data Types' },
                        { url: '#side/session1_8', title: 'Expressions' },
                        { url: '#side/session1_9', title: 'Operators' },
                        { url: '#side/session1_15', title: 'Eval' }
                    ]},
                    { url: '#side/session2', title: 'Statements', topics:[
                        { url: '#side/session2_1', title: 'Expression Statements' },
                        { url: '#side/session2_2', title: 'Compound and Empty Statements' },
                        { url: '#side/session2_3', title: 'Declaration Statements' },
                        { url: '#side/session2_5', title: 'Conditionals' },
                        { url: '#side/session2_10', title: 'Loops' },
                        { url: '#side/session2_12', title: 'Jumps' },
                        { url: '#side/session2_15', title: 'Miscellaneous Statements' },
                    ]},
                    { url: '#side/session3', title: 'Inbuild Objects', topics:[
                      { url: '#side/session3_1', title: 'Objects' },
                      { url: '#side/session3_11', title: 'Arrays' },
                      { url: '#side/session3_15', title: 'Functions' },
                      { url: '#side/session3_24', title: 'Regex' },
                      { url: '#side/session3_26', title: 'Date' }
                    ]},
                    { url: '#side/session4', title: 'OPPs', topics:[
                      { url: '#side/session4_1',  title: 'Constructor' },
                      { url: '#side/session4_2',  title: 'Inheritance' },
                      { url: '#side/session4_4',  title: "Accesing Prototype object's properties"},
                      { url: '#side/session4_6',  title: "Identifing Class"},
                      { url: '#side/session4_7',  title: "Constructor Property"},
                      { url: '#side/session4_8',  title: "Static Variables/Methods"},
                      { url: '#side/session4_9',  title: "Public and Private Variables/Methods"},
                      { url: '#side/session4_10', title: "Constructor and method chaining from subclass to superclass"},
                      { url: '#side/session4_11', title: "Abstract Class & module"}
                    ]},
                    { url: '#side/session5', title: 'Modules & Libraries', topics:[
                        { url: '#side/session5_1', title: 'Modules' },
                        { url: '#side/session5_2', title: 'Libraries' }
                    ]},
                    { url: '#side/session6', title: 'The Good Parts' },
                    { url: '#side/session7', title: 'Browser', topics:[
                        { url: '#side/session7_1', title: 'Browser Objects' },
                        { url: '#side/session7_2', title: 'Events' },
                        { url: '#side/session7_3', title: 'Ajax' }
                    ]},
                    { url: '#side/session8', title: 'Intoduction to HTML5' },
                ]
            };

            var html = _.template(template, slides);
            this.$el.html( html );
        },
    });

    return IndexView;
});