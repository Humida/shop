const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

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

app.get('/', (req, res, next) => {
    res.render('home');
})

const port = process.env.PORT || 4000;

console.log(process.env.MONGODB);
app.listen(port, () => {
    console.log(`app is lintening on port :${port}`);
})