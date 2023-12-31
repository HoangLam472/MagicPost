const express = require('express')
const morgan = require('morgan')
const path = require('path'); 
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')
require("dotenv").config();
const session = require('express-session')

// connect to db
db.connect();

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}
));
app.use(express.json());


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}))

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}
));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init 
route(app); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})