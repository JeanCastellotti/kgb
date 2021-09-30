const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const stylus = require('stylus');

const app = express();

// mongoose
// mongoose
// 	.connect('mongodb://localhost:27017/kgb')
// 	.then(() => {
// 		console.log('Database successfully connected');
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// view engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// body parser
app.use(express.urlencoded({ extended: true }));

// stylus
app.use(stylus.middleware(path.join(__dirname, 'public')));

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index', { title: 'Accueil' });
});

app.listen(3000, () => {
	console.log('Server is running: http://localhost:3000');
});
