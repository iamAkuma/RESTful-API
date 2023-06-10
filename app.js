const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect tp Mongoose
mongoose.connect('mongodb://localhost/bookstore');

const db = mongoose.connection;

//Route for the landing page

app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genre');

});

app.listen(3000);
console.log('Running on Port 3000...');