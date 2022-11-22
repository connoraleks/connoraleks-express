var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js');
  // send the index.html file from the apps/build-jaydnserranofrontend folder
  res.sendFile('index.html', { root: 'apps/build-connoraleksfrontend' });
});

module.exports = router;
