const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//how to add pug //telling express js to use pug 
app.set('view engine','pug'); 
app.set('views','views'); 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const newsData = require('./routes/news') ;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(newsData.routes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
