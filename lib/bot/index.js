var LuisAdapter = require("luis-adapter");

var options = {appId:'07f167d0-e823-4a36-b546-1502fe71c0c9',
               subscriptionKey: 'd6e2344416744f90b1a325501fd40a21'};


var luisAdapter = new LuisAdapter(options);



 module.exports =luisAdapter;
