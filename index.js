const express = require('express');
const bodyParser = require('body-parser'); 

// criando aplicação
const app = express();

// configurando o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./src/controller/authController')(app);
// configurando o front
app.set('view engine', 'ejs');
app.set('views', 'views');

// definindo arquivos estaticos (css, js, imagens)
app.use(express.static('public'));

// exportando aplicação
module.exports = app;