var express = require( 'express' );
var morgan = require('morgan')
var nunjucks = require('nunjucks')
var app = express(); // creates an instance of an express application
var routes = require('./routes/');
var bodyParser = require('body-parser')

app.use('/', routes);

app.use(morgan('dev')); //logging at the top, error handling at the bottom
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
// app.use(morgan('combined', {
//   skip: function (req, res) { return res.statusCode < 400 }
// }))

// in some file that is in the root directory of our application
nunjucks.configure('views', {noCache: true});
//.configure([path], [opts]),can flip opts on and off.


//nunjucks.configure('views'); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks



app.listen(3000,function(){
	console.log("server listening")
});

// app.get("/", function(req,res){
// 	res.send("Welcome to Our Site!")
// })

// app.get("/news", function(req,res){
// 	res.send("Breaking news!")
// })

app.get("/index.html", function(req,res){

	res.render("index", {title:'The Wonderful World', subTitle:'Harry Potter', people})
})

//replaced by morgan
// app.use(function(req, res, next){
// 	console.log(req.method + " " + req.originalUrl);
// 	next();
// })

// app.use("/special/",function(req, res, next){
// 	console.log("You've reached the special area.")
// 	next();
// })
