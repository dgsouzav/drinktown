const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

require('./database/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controller/userController')(app);
require('./controller/productController')(app);

app.listen(3000);

module.exports = app;