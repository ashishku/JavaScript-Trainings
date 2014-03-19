function genrateHtmlSessionDetails (options) {
  function getTemplate() {
    return options.template ? options.template : (options.ssid ? 'sessions/' + options.sid + '/' + options.sid + '_' + options.ssid + '.html' : 'sessions/' + options.sid + '.html')
  }
  return {
    view     : 'Html',
    next     : options.next ? options.next : 'session' + options.sid + '_' + (parseInt(options.ssid) + 1),
    previous : options.previous ? options.previous : 'session' + options.sid + '_' + (parseInt(options.ssid) - 1),
    data     : {
      template: getTemplate()
    }
  }
}

define({
    'session1'   : genrateHtmlSessionDetails({sid:1, next: 'session1_1', previous: '#', data:{template: 'sessions/1.html'}}),
    'session1_1' : genrateHtmlSessionDetails({sid:1, ssid: '1', previous: 'session1'}),
    'session1_2' : genrateHtmlSessionDetails({sid:1, ssid: '2'}),
    'session1_3' : genrateHtmlSessionDetails({sid:1, ssid: '3'}),
    'session1_4' : genrateHtmlSessionDetails({sid:1, ssid: '4'}),
    'session1_5' : genrateHtmlSessionDetails({sid:1, ssid: '5'}),
    'session1_6' : genrateHtmlSessionDetails({sid:1, ssid: '6'}),
    'session1_7' : {view: 'Jsbin',  next:'session1_8', previous: 'session1_6', data:{url: '//jsbin.com/ashishJS/2/embed?js,console'}},
    'session1_8' : genrateHtmlSessionDetails({sid:1, ssid: '8'}),
    'session1_9' : genrateHtmlSessionDetails({sid:1, ssid: '9'}),
    'session1_10': genrateHtmlSessionDetails({sid:1, ssid: '10'}),
    'session1_11': genrateHtmlSessionDetails({sid:1, ssid: '11'}),
    'session1_12': genrateHtmlSessionDetails({sid:1, ssid: '12'}),
    'session1_13': genrateHtmlSessionDetails({sid:1, ssid: '13'}),
    'session1_14': genrateHtmlSessionDetails({sid:1, ssid: '14'}),
    'session1_15': genrateHtmlSessionDetails({sid:1, ssid: '15'}),
    'session1_16': genrateHtmlSessionDetails({sid:1, ssid: '16', next: 'session2'}),

    'session2'   : genrateHtmlSessionDetails({sid:2, next: 'session2_1', previous: 'session1_16', data:{template: 'sessions/2.html'}}),
});