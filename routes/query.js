var express = require('express');
var router = express.Router();
var luisAdapter = require('../lib/bot/');
var url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var url_parts = url.parse(req.url, true);
  var queryString = url_parts.query.q;
  console.log(queryString);
  luisAdapter.Query(queryString, function(data){

     res.send(data);

   }, function(error){ console.log(error); });

});


module.exports = router;
