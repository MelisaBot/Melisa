var express = require('express');
var router = express.Router();
var ml = require('../lib/meli/connect.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(ml);

  ml.get('/sites/MLA/search?q=ipod', function (err, res2) {
      var articles= res2.results;
      var ids=  [];
              console.log(articles.length);
      for(var i; i<articles.length;i++){

        ids.push(articles[i].id);
      }

      res.send(ids);
  });

});

module.exports = router;
