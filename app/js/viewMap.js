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
    }
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
    'session3_28' : genrateHtmlSessionDetails ({sid:3, ssid: '28'}),

    'session4'   : genrateSummarySessionDetails({
        sid:4, 
        previous: 'session3_28',
        session: 'Opps',
        subSessions: [
          { url: '#side/session4_1', title: 'Inheritance' },
        ]
    }),
    'session4_1'  : genrateJsBinSessionDetails({sid:4, ssid: '1', url: '//jsbin.com/javascript3/5/embed?js,console', previous: 'session4'}),
    'session4_2'  : genrateJsBinSessionDetails({sid:4, ssid: '2', url: '//jsbin.com/javascript5/10/embed?js,console'}),
    'session4_3'  : genrateJsBinSessionDetails({sid:4, ssid: '3', url: '//jsbin.com/ashishJSInheritance/1/embed?js,console'}),
    'session4_4'  : genrateJsBinSessionDetails({sid:4, ssid: '4', url: '//jsbin.com/javascript4/7/embed?js,console'}),
    'session4_5'  : genrateJsBinSessionDetails({sid:4, ssid: '5', url: '//jsbin.com/ashishJSOOPs/2/embed?js,console'}),
});