var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
  };

  webdriverio
    .remote(options)
    .init()
    .url('http://tumblr.com')
    .windowHandleMaximize(["current"])
    //.setValue('*[id="b_ifc0"]','webdriverio')
    .click('*[class="signup_link login-button"]')
    //.pause(1000)
    .addValue('*[id="signup_email"]','harshadatumblr@gmail.com')
    .pause(100)
    .addValue('*[id="signup_password"]','harshada123')
    .pause(100)
    .click('*[class="chrome big signup_forms_submit touchy blue"]');
    //.title(function(err, res) ;
    	