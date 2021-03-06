function getTemplate(options) {
    return options.template ? options.template : (options.ssid ? 'sessions/' + options.sid + '/' + options.sid + '_' + options.ssid + '.html' : 'sessions/' + options.sid + '.html')
}
function genrateHtmlSessionDetails (options) {
  return {
    view     : 'Html',
    next     : options.next ? options.next : 'session' + options.sid + '_' + (parseInt(options.ssid) + 1),
    previous : options.previous ? options.previous : 'session' + options.sid + '_' + (parseInt(options.ssid) - 1),
    data     : {
      template: getTemplate(options)
    },
    deps    : options.deps || []
  }
}

function genrateJsBinSessionDetails (options) {
  return {
    view     : 'Jsbin',
    next     : options.next ? options.next : 'session' + options.sid + '_' + (parseInt(options.ssid) + 1),
    previous : options.previous ? options.previous : 'session' + options.sid + '_' + (parseInt(options.ssid) - 1),
    data     : {
      url: options.url
    }
  }
}

function genrateSummarySessionDetails (options) {
  return {
    view     : 'Summary',
    next     : options.next ? options.next : 'session' + options.sid + '_1',
    previous : options.previous,
    data     : {
      session    : options.session,
      subSessions: options.subSessions,
    }
  }
}

define({
    'session1'   : genrateSummarySessionDetails({
        sid:1, 
        previous: '', 
        session: 'Introduction',
        subSessions: [
            { url: '#side/session1_1', title: 'Introduction' },
            { url: '#side/session1_2', title: 'Lexical Structure' },
            { url: '#side/session1_4', title: 'Variables and Data Types' },
            { url: '#side/session1_8', title: 'Expressions' },
            { url: '#side/session1_9', title: 'Operators' },
            { url: '#side/session1_15', title: 'Eval' }
        ]
    }),
    'session1_1' : genrateHtmlSessionDetails   ({sid:1, ssid: '1', previous: 'session1'}),
    ///////////////////////////////////////////////////////////////
    'session1_2' : genrateHtmlSessionDetails   ({sid:1, ssid: '2'}),
    'session1_3' : genrateHtmlSessionDetails   ({sid:1, ssid: '3'}),
    ///////////////////////////////////////////////////////////////
    'session1_4' : genrateHtmlSessionDetails   ({sid:1, ssid: '4'}),
    'session1_5' : genrateHtmlSessionDetails   ({sid:1, ssid: '5'}),
    'session1_6' : genrateHtmlSessionDetails   ({sid:1, ssid: '6'}),
    'session1_7' : genrateJsBinSessionDetails  ({sid:1, ssid: '7', url: '//jsbin.com/ashishJS/2/embed?js,console'}),
    ///////////////////////////////////////////////////////////////
    'session1_8' : genrateHtmlSessionDetails   ({sid:1, ssid: '8'}),
    ///////////////////////////////////////////////////////////////
    'session1_9' : genrateHtmlSessionDetails   ({sid:1, ssid: '9'}),
    'session1_10': genrateHtmlSessionDetails   ({sid:1, ssid: '10'}),
    'session1_11': genrateHtmlSessionDetails   ({sid:1, ssid: '11'}),
    'session1_12': genrateHtmlSessionDetails   ({sid:1, ssid: '12'}),
    'session1_13': genrateHtmlSessionDetails   ({sid:1, ssid: '13'}),
    'session1_14': genrateHtmlSessionDetails   ({sid:1, ssid: '14'}),
    ///////////////////////////////////////////////////////////////
    'session1_15': genrateHtmlSessionDetails   ({sid:1, ssid: '15'}),
    'session1_16': genrateHtmlSessionDetails   ({sid:1, ssid: '16', next: 'session2'}),

    'session2'   : genrateSummarySessionDetails({
        sid:2, 
        previous: 'session1_16',
        session: 'Statements',
        subSessions: [
          { url: '#side/session2_1',  title: 'Expression Statements' },
          { url: '#side/session2_2',  title: 'Compound and Empty Statements' },
          { url: '#side/session2_3',  title: 'Declaration Statements' },
          { url: '#side/session2_5',  title: 'Conditionals' },
          { url: '#side/session2_10', title: 'Loops' },
          { url: '#side/session2_12', title: 'Jumps' },
          { url: '#side/session2_15', title: 'Miscellaneous Statements' }
        ]
    }),
    'session2_1'  : genrateHtmlSessionDetails   ({sid:2, ssid: '1', previous: 'session2'}),
    ///////////////////////////////////////////////////////////////
    'session2_2'  : genrateHtmlSessionDetails   ({sid:2, ssid: '2'}),
    ///////////////////////////////////////////////////////////////
    'session2_3'  : genrateHtmlSessionDetails   ({sid:2, ssid: '3'}),
    'session2_4'  : genrateJsBinSessionDetails  ({sid:2, ssid: '4', url: '//jsbin.com/ashishJSVariables/2/embed?js'}),
    ///////////////////////////////////////////////////////////////
    'session2_5'  : genrateHtmlSessionDetails   ({sid:2, ssid: '5'}),
    'session2_6'  : genrateJsBinSessionDetails  ({sid:2, ssid: '6', url: '//jsbin.com/ashishJSIfElse/1/embed?js'}),
    'session2_7'  : genrateJsBinSessionDetails  ({sid:2, ssid: '7', url: '//jsbin.com/ashishJSElseIf/3/embed?js'}),
    'session2_8'  : genrateHtmlSessionDetails   ({sid:2, ssid: '8'}),
    'session2_9'  : genrateJsBinSessionDetails  ({sid:2, ssid: '9', url: '//jsbin.com/ashishJSSwitch/4/embed?js'}),
    ///////////////////////////////////////////////////////////////
    'session2_10' : genrateHtmlSessionDetails   ({sid:2, ssid: '10'}),
    'session2_11' : genrateJsBinSessionDetails  ({sid:2, ssid: '11', url: '//jsbin.com/ashishJSForIn/2/embed?js'}),
    ///////////////////////////////////////////////////////////////
    'session2_12' : genrateHtmlSessionDetails   ({sid:2, ssid: '12'}),
    'session2_13' : genrateJsBinSessionDetails  ({sid:2, ssid: '13', url: '//jsbin.com/ashishJSLabelBreak/1/embed?js'}),
    'session2_14' : genrateJsBinSessionDetails  ({sid:2, ssid: '14', url: '//jsbin.com/ashishJSTryCatchFinaly/2/embed?js'}),
    ///////////////////////////////////////////////////////////////
    'session2_15' : genrateHtmlSessionDetails   ({sid:2, ssid: '15', next: 'session3'}),

    'session3'   : genrateSummarySessionDetails({
        sid:3, 
        previous: 'session2_15',
        session: 'Inbuild Objects',
        subSessions: [
          { url: '#side/session3_1', title: 'Objects' },
          { url: '#side/session3_11', title: 'Arrays' },
          { url: '#side/session3_15', title: 'Functions' },
          { url: '#side/session3_24', title: 'Regex' },
          { url: '#side/session3_26', title: 'Date' }
        ]
    }),
    'session3_1'  : genrateHtmlSessionDetails ({sid:3, ssid: '1', previous: 'session3'}),
    'session3_2'  : genrateHtmlSessionDetails ({sid:3, ssid: '2'}),
    'session3_3'  : genrateHtmlSessionDetails ({sid:3, ssid: '3'}),
    'session3_4'  : genrateJsBinSessionDetails({sid:3, ssid: '4', url: '//jsbin.com/javascript1/7/embed?js,console'}),
    'session3_5'  : genrateJsBinSessionDetails({sid:3, ssid: '5', url: '//jsbin.com/javascript2/2/embed?js,console'}),
    'session3_6'  : genrateHtmlSessionDetails ({sid:3, ssid: '6'}),
    'session3_7'  : genrateJsBinSessionDetails({sid:3, ssid: '7', url: '//jsbin.com/ashishJSGetterSetter/1/embed?js,console'}),
    'session3_8'  : genrateHtmlSessionDetails ({sid:3, ssid: '8'}),
    'session3_9'  : genrateJsBinSessionDetails({sid:3, ssid: '9', url: '//jsbin.com/javascript5/6/embed?js,console'}),
    'session3_10' : genrateHtmlSessionDetails ({sid:3, ssid: '10'}),
    ///////////////////////////////////////////////////////////////
    'session3_11' : genrateHtmlSessionDetails ({sid:3, ssid: '11'}),
    'session3_12' : genrateHtmlSessionDetails ({sid:3, ssid: '12'}),
    'session3_13' : genrateHtmlSessionDetails ({sid:3, ssid: '13'}),
    'session3_14' : genrateJsBinSessionDetails({sid:3, ssid: '14', url: '//jsbin.com/ashishJSArrays/6/embed?js,console'}),
    ///////////////////////////////////////////////////////////////
    'session3_15' : genrateHtmlSessionDetails ({sid:3, ssid: '15'}),
    'session3_16' : genrateHtmlSessionDetails ({sid:3, ssid: '16'}),
    'session3_17' : genrateJsBinSessionDetails({sid:3, ssid: '17', url: '//jsbin.com/ashishJSFunctions/8/embed?js,console'}),
    'session3_18' : genrateHtmlSessionDetails ({sid:3, ssid: '18'}),
    'session3_19' : genrateJsBinSessionDetails({sid:3, ssid: '19', url: '//jsbin.com/ashishJSModules/7/embed?js,console'}),
    'session3_20' : genrateHtmlSessionDetails ({sid:3, ssid: '20'}),
    'session3_21' : genrateHtmlSessionDetails ({sid:3, ssid: '21'}),
    'session3_22' : genrateJsBinSessionDetails({sid:3, ssid: '22', url: '//jsbin.com/ashishJSFunctions2/4/embed?js,console'}),
    'session3_23' : genrateJsBinSessionDetails({sid:3, ssid: '23', url: '//jsbin.com/ashishJSFunctions3/1/embed?js,console'}),
    ///////////////////////////////////////////////////////////////
    'session3_24' : genrateHtmlSessionDetails ({sid:3, ssid: '24'}),
    'session3_25' : genrateJsBinSessionDetails({sid:3, ssid: '25', url: '//jsbin.com/ashishJSRegex/1/embed?js,console'}),
    ///////////////////////////////////////////////////////////////
    'session3_26' : genrateHtmlSessionDetails ({sid:3, ssid: '26'}),
    'session3_27' : genrateHtmlSessionDetails ({sid:3, ssid: '27'}),
    'session3_28' : genrateHtmlSessionDetails ({sid:3, ssid: '28', next: 'session4'}),

    'session4'   : genrateSummarySessionDetails({
        sid:4, 
        previous: 'session3_28',
        session: 'Opps',
        subSessions: [
          { url: '#side/session4_1',  title: 'Constructor' },
          { url: '#side/session4_2',  title: 'Inheritance' },
          { url: '#side/session4_4',  title: "Accesing Prototype object's properties"},
          { url: '#side/session4_6',  title: "Identifing Class"},
          { url: '#side/session4_7',  title: "Constructor Property"},
          { url: '#side/session4_8',  title: "Static Variables/Methods"},
          { url: '#side/session4_9',  title: "Public and Private Variables/Methods"},
          { url: '#side/session4_10', title: "Constructor and method chaining from subclass to superclass"},
          { url: '#side/session4_11', title: "Abstract Class & module"}
        ]
    }),
    'session4_1'  : genrateJsBinSessionDetails({sid:4, ssid: '1',  url: '//jsbin.com/javascript3/5/embed?js,console', previous: 'session4'}),
    'session4_2'  : genrateJsBinSessionDetails({sid:4, ssid: '2',  url: '//jsbin.com/javascript5/10/embed?js,console'}),
    'session4_3'  : genrateJsBinSessionDetails({sid:4, ssid: '3',  url: '//jsbin.com/ashishJSInheritance/3/embed?js,console'}),
    'session4_4'  : genrateJsBinSessionDetails({sid:4, ssid: '4',  url: '//jsbin.com/javascript4/7/embed?js,console'}),
    'session4_5'  : genrateJsBinSessionDetails({sid:4, ssid: '5',  url: '//jsbin.com/ashishJSOOPs/2/embed?js,console'}),
    'session4_6'  : genrateJsBinSessionDetails({sid:4, ssid: '6',  url: '//jsbin.com/ashishJSCheckClass/3/embed?js,console'}),
    'session4_7'  : genrateJsBinSessionDetails({sid:4, ssid: '7',  url: '//jsbin.com/ashishJSConstructorProperty/1/embed?js,console'}),
    'session4_8'  : genrateJsBinSessionDetails({sid:4, ssid: '8',  url: '//jsbin.com/ashishJSOOPsStatic/2/embed?js,console'}),
    'session4_9'  : genrateJsBinSessionDetails({sid:4, ssid: '9',  url: '//jsbin.com/ashishJSOOPsPrivate/1/embed?js,console'}),
    'session4_10' : genrateJsBinSessionDetails({sid:4, ssid: '10', url: '//jsbin.com/ashishJSCallingSuper/1/embed?js,console'}),
    'session4_11' : genrateJsBinSessionDetails({sid:4, ssid: '11', url: '//jsbin.com/ashishJSAbstractClass/4/embed?js,console', next: 'session5'}),

    'session5'   : genrateSummarySessionDetails({
      sid:5,
      previous: 'session4_11',
      session: 'Modules & Libraries',
      subSessions: [
        { url: '#side/session5_1',  title: 'Revisit Module' },
        { url: '#side/session5_2',  title: 'Loading Module' },
        { url: '#side/session5_4',  title: 'Require.js' },
        { url: '#side/session5_7',  title: 'underscore.js' },
      ]
    }),
    'session5_1'  : genrateJsBinSessionDetails({sid:5, ssid: '1',  url: '//jsbin.com/ashishJSModulesImportExport/4/embed?js,console', previous: 'session5'}),
    'session5_2'  : genrateJsBinSessionDetails({sid:5, ssid: '2',  url: '//jsbin.com/ashishJSLoadingModule/6/embed?js,console'}),
    'session5_3'  : genrateHtmlSessionDetails ({sid:5, ssid: '3'}),
    'session5_4'  : genrateJsBinSessionDetails({sid:5, ssid: '4',  url: '//jsbin.com/requirejs5/1'}),
    'session5_5'  : genrateJsBinSessionDetails({sid:5, ssid: '5',  url: '//requirejs.org/docs/api.html#config'}),
    'session5_6'  : genrateJsBinSessionDetails({sid:5, ssid: '6',  url: '//jsbin.com/requirejs4/1/embed?console'}),
    'session5_7'  : genrateJsBinSessionDetails({sid:5, ssid: '7',  url: '//jsbin.com/_1/2/embed?js,console'}),
    'session5_8'  : genrateJsBinSessionDetails({sid:5, ssid: '8',  url: '//jsbin.com/_2/9/embed?js,console'}),
    'session5_9'  : genrateJsBinSessionDetails({sid:5, ssid: '9',  url: '//jsbin.com/_3/2/embed?js,console'}),
    'session5_10' : genrateJsBinSessionDetails({sid:5, ssid: '10', url: '//jsbin.com/_4/2/embed?js,console'}),
    'session5_11' : genrateJsBinSessionDetails({sid:5, ssid: '11', url: '//jsbin.com/_5/2/embed?js,console'}),
    'session5_12' : genrateJsBinSessionDetails({sid:5, ssid: '12', url: '//jsbin.com/_6/2/embed?js,console', next: 'session6'}),

    'session6'   : genrateSummarySessionDetails({
      sid:6,
      previous: 'session5_12',
      session: "JavaScript: The Good Parts by Douglas Crockford.",
      subSessions: [
        { url: '#side/session6_1',  title: 'The Author and The Book' },
        { url: '#side/session6_2',  title: 'Awful Parts' },
        { url: '#side/session6_3',  title: 'Bad Parts' },
        { url: '#side/session6_4',  title: 'Examples' },
        { url: '#side/session6_15',  title: 'JSLint' }
      ]
    }),
    'session6_1'  : genrateHtmlSessionDetails ({sid:6, ssid: '1', previous: 'session6'}),
    'session6_2'  : genrateHtmlSessionDetails ({sid:6, ssid: '2'}),
    'session6_3'  : genrateHtmlSessionDetails ({sid:6, ssid: '3'}),
    'session6_4'  : genrateJsBinSessionDetails({sid:6, ssid: '4',  url: '//jsbin.com/ashishJSDC0/1/embed?js'}),
    'session6_5'  : genrateJsBinSessionDetails({sid:6, ssid: '5',  url: '//jsbin.com/ashishJSDC1/2/embed?js'}),
    'session6_6'  : genrateJsBinSessionDetails({sid:6, ssid: '6',  url: '//jsbin.com/ashishJSDC2/2/embed?js'}),
    'session6_7'  : genrateJsBinSessionDetails({sid:6, ssid: '7',  url: '//jsbin.com/ashishJSDC3/1/embed?js'}),
    'session6_8'  : genrateJsBinSessionDetails({sid:6, ssid: '8',  url: '//jsbin.com/ashishJSDC04/9/embed?js'}),
    'session6_9'  : genrateJsBinSessionDetails({sid:6, ssid: '9',  url: '//jsbin.com/ashishJSDC5/1/embed?js'}),
    'session6_10' : genrateJsBinSessionDetails({sid:6, ssid: '10', url: '//jsbin.com/ashishJSDC6/5/embed?js'}),
    'session6_11' : genrateJsBinSessionDetails({sid:6, ssid: '11', url: '//jsbin.com/ashishJSDC7/1/embed?js'}),
    'session6_12' : genrateJsBinSessionDetails({sid:6, ssid: '12', url: '//jsbin.com/ashishJSDC8/1/embed?js'}),
    'session6_13' : genrateJsBinSessionDetails({sid:6, ssid: '13', url: '//jsbin.com/ashishJSDC9/1/embed?js'}),
    'session6_14' : genrateJsBinSessionDetails({sid:6, ssid: '14', url: '//jsbin.com/ashishJSIfElse/1/embed?js'}),
    'session6_15' : genrateHtmlSessionDetails ({sid:6, ssid: '15'}),
    'session6_16' : genrateJsBinSessionDetails({sid:6, ssid: '16', url: '//jsbin.com/ashishJSDC10/1.js', next: 'session7'}),

    'session7'   : genrateSummarySessionDetails({
      sid:7,
      previous: 'session6_16',
      session: "Browser",
      subSessions: [
        { url: '#side/session7_1',  title: 'Rendering Engine' },
        { url: '#side/session7_2',  title: 'JavaScript Engine' },
        { url: '#side/session7_4',  title: 'DOM' },
        { url: '#side/session7_6',  title: 'Event' },
        { url: '#side/session7_9',  title: 'AJAX' }
      ]
    }),
    'session7_1'  : genrateHtmlSessionDetails ({sid:7, ssid: '1', deps:['sessions/7/1'], previous: 'session7'}),
    'session7_2'  : genrateHtmlSessionDetails ({sid:7, ssid: '2', deps:['sessions/7/2']}),
    'session7_3'  : genrateJsBinSessionDetails({sid:7, ssid: '3', url: '//jsbin.com/ashishJSSetTimeOut/18/embed?js,html'}),
    'session7_4'  : genrateHtmlSessionDetails ({sid:7, ssid: '4'}),
    'session7_5'  : genrateHtmlSessionDetails ({sid:7, ssid: '5', deps:['sessions/7/5']}),
    'session7_6'  : genrateHtmlSessionDetails ({sid:7, ssid: '6'}),
    'session7_7'  : genrateHtmlSessionDetails ({sid:7, ssid: '7'}),
    'session7_8'  : genrateHtmlSessionDetails ({sid:7, ssid: '8'}),
    'session7_9'  : genrateHtmlSessionDetails ({sid:7, ssid: '9'}),
    'session7_10' : genrateJsBinSessionDetails({sid:7, ssid: '10', url: '//jsbin.com/ashishJSAjax/2/embed?js,console'}),
    'session7_11' : genrateHtmlSessionDetails ({sid:7, ssid: '11', next: 'session8'}),

    'session8'   : genrateSummarySessionDetails({
      sid:8,
      previous: 'session7_11',
      session: "Intoduction to HTML5 Apis",
      subSessions: [
        { url: '#side/session8_1',  title: 'Client Side Storage' },
        { url: '#side/session8_3',  title: 'Geolocation' },
        { url: '#side/session8_4',  title: 'Push State' },
        { url: '#side/session8_5',  title: 'Web worker' },
        { url: '#side/session8_6',  title: 'Typeed Arrays' },
        { url: '#side/session8_7',  title: 'Misc' }
      ]
    }),
    'session8_1'  : genrateHtmlSessionDetails ({sid:8, ssid: '1', previous: 'session8'}),
    'session8_2'  : genrateJsBinSessionDetails({sid:8, ssid: '2',  url: '//jsbin.com/ashishJSStorage/31/embed?js'}),
    'session8_3'  : genrateJsBinSessionDetails({sid:8, ssid: '3',  url: '//jsbin.com/ashishJSGeo/1/embed?js'}),
    'session8_4'  : genrateJsBinSessionDetails({sid:8, ssid: '4',  url: '//jsbin.com/ashishJSPushState/1/embed?js,html'}),
    'session8_5'  : genrateJsBinSessionDetails({sid:8, ssid: '5',  url: '//jsbin.com/ashishJSWebWorker/3/embed?js,html'}),
    'session8_6'  : genrateHtmlSessionDetails ({sid:8, ssid: '6'}),
    'session8_7'  : genrateHtmlSessionDetails ({sid:8, ssid: '7', next: '#'}),
});