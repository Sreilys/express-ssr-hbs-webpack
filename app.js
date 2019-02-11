// var express = require('express');
import express from 'express';

var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
	extname: 'hbs', 
	defaultLayout: 'main',
	layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var data = [
	{
		id: 1,
		name: 'Greg'
	},
	{
		id: 2,
		name: 'Pollok'
	}
]

app.get('/', function(req, res){
	res.render('home', {
		title: 'Welcome',
		data: data
	});
});

app.get('/about', function(req, res){
	res.render('about');
});

app.listen(3000);
console.log('Server is running on port 3000...');
