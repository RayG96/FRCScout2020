var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  console.log("inside users");
  res.send('respond with a resource');
});

module.exports = router;
