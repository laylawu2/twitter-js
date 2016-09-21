var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var allTweets = tweetBank.list();
  res.render( 'index', { tweets: allTweets } );
});

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name;//saved from :name
  var tweetsForName = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweetsForName } );
  next();
});

router.get('/tweets/:id', function(req, res){
  var idNum = parseInt(req.params.id);//(== a string)
  var tweetsForId = tweetBank.find( {id: idNum} );
  res.render('index', { tweets: tweetsForId })
})

router.get('/create', function(req, res){
  var allTweets = tweetBank.list();
  res.render( 'index', { tweets: allTweets, showForm: true } );
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile('/Users/laylawu/Projects/GraceHopper/week-two/twitter-js/public/stylesheets/public/stylesheets/style.css');

// });


router.use(express.static('public'));

module.exports = router;
