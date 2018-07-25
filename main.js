var apiai = require('apiai');
 
var app = apiai("Bearer 10f037e9e03f463ab5e7f30ed1002965");
 
var request = app.textRequest('Hi', {
    sessionId: '<unique session id>'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();