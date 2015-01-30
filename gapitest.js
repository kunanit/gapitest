
exports.makegapicall = function(){

var googleapis = require('googleapis');
var calendar = googleapis.calendar('v3');

var calID = 's803pkqusb25jeetrevhrtdqm4@group.calendar.google.com';
var email = '157639712128-54ci92canht17fota4ku7cn2q0n9cu0r@developer.gserviceaccount.com';

var jwtClient = new googleapis.auth.JWT(
  email,
  'mykey.pem',
  null,
  ['https://www.googleapis.com/auth/calendar']);

jwtClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(process.argv[2]); // print cmd line argument
  	// Make an authorized request
  	calendar.events.insert({
	  	auth: jwtClient,
		'calendarId':calID,
		'resource':{
			'summary':'S0d1',
			'start':{'date':'2015-01-10'},
			'end':{'date':'2015-01-10'}
			}
		}, function(err, resp) {
		    // handle err and response
		    console.log('Result: ' + (err ? err.message : resp.id));
	});

  	// Make an authorized request
  	calendar.events.insert({
	  	auth: jwtClient,
		'calendarId':calID,
		'resource':{
			'summary':'S0d2',
			'start':{'date':'2015-01-11'},
			'end':{'date':'2015-01-11'}
			}
		}, function(err, resp) {
		    // handle err and response
		    console.log('Result: ' + (err ? err.message : resp.id));
	});
});

};
