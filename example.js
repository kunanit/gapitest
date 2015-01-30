var google = require('googleapis');
var plus = google.plus('v1');

var API_KEY = 'ABC123'; // specify your API key here

plus.people.get({ auth: API_KEY, userId: '+google' }, function(err, user) {
  console.log('Result: ' + (err ? err.message : user.displayName));
});