var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile('/Users/laylawu/Projects/GraceHopper/week-two/twitter-js/public/stylesheets/public/stylesheets/style.css');

// });


router.use(express.static('public'));

module.exports = router;
