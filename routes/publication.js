var express = require('express');
var router = express.Router();
var ml = require('../lib/meli/connect.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(ml);

  ml.get('/items/MLA625382680/', function (err, res2) {

      res.send(res2);
  });

});

module.exports = router;
