const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.listen(() => {
	console.log('Server is running: http://localhost:3000');
});
