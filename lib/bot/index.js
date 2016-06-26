var LuisAdapter = require("luis-adapter");

var options = {appId:'07f167d0-e823-4a36-b546-1502fe71c0c9',
               subscriptionKey: 'd3621ff1310749a2bbf1fd81ae338c2a'};


var luisAdapter = new LuisAdapter(options);



 module.exports =luisAdapter;
