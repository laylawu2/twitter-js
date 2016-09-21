var _ = require('lodash');
var data = [];


function add (name, content) {
  var id;
    data.push({ name: name, content: content, id: counter
    });
  //console.log(data)
  }



function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

var getProperty = function(){
  // var property = ['Australian Shepherd', 'German Shepherd', 'French Bulldog', 'Pitbull', 'Golden Retriever', 'Afghan Hound', 'Bernese Mountain Dog', 'Beagle', 'Dalmatian']
  var property = ['Australian Shepherd', 'German Shepherd']
	return randArrayEl(property)
}

var counter = 0
for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet());
  counter ++
  //console.log(i)
}

console.log(find({id: 3}))
// console.log(data)
// console.log("-----------------------------------------")
// console.log(find(data, {'property':'German Shepherd'}))
