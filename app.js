
// This application will take in client , physio and session data. I had hoped to have a way of displaying all 3 pieces of data on a page but 
// simply ran out of time. On the home page you can see the client info and you're able to delete it from there. I had also hoped to include an update
// function. Although you cant view the physio and session data on the webpage , it is still submitted into the mysql database.







const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');
require('dotenv').config();
const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());


app.use(express.static('public'));

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');


exports.form = (req, res) =>{
    res.render('home');
}

const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, ()=> console.log(`Listen on port number ${port}`));


