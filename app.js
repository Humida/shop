const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const homeControllor = require('./src/app/controller/home.controller');

// require route
const productRouter = require('./src/router/product.router')

const app = express();
// use dotenv
require('dotenv').config()

// app set view engine
app.set('views', 'src/views')
app.engine('handlebars', handlebars());
app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({ extname: '.hbs' }));

// body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app use static file

app.use(express.static(path.join(__dirname, 'src/public')));

// connect mongodb
const db = require('./src/config/connectDB');
db.connect();

// router use

app.use('/shirt', productRouter);

app.get('/', homeControllor);

const port = process.env.PORT || 4000;

console.log(process.env.MONGODB);
app.listen(port, () => {
    console.log(`app is lintening on port :${port}`);
})