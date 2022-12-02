var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js');
  // send the index.html file from the apps/build-jaydnserranofrontend folder
  res.sendFile('index.html', { root: 'apps/build-connoraleksfrontend' });
});
router.get('/aisearch', function(req, res, next) {
  console.log('aisearch.js');
  // send the index.html file from the apps/build-aisearch folder
  res.sendFile('index.html', { root: 'apps/build-aisearch' });
});

module.exports = router;
