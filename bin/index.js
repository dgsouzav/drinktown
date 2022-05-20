const express = require('express');
const bp = require('body-parser'); 

// criando aplicação
const app = express();

// configurando o body-parser
app.use(bp.urlencoded({extended: false}));
app.use(bp.json({limit: '10mb'}));


// configurando o front
app.set('view engine', 'ejs');
app.set('views', 'views');

// definindo arquivos estaticos (css, js, imagens)
app.use(express.static('public'));

// chamando rotas
app.use('/', (req, res) => {
    return res.render('login.ejs');
});

// exportando aplicação
module.exports = app;