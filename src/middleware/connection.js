'use strict';

const mongoose = require('mongoose');
const keys = require('../../bin/keys.js');

// recebe conexao com o banco de dados
module.exports.connect  = () => {
    mongoose.connect(keys.database.connection, err => {
        if(err) { // se houver erro
            console.log('Erro ao conectar no banco de dados');
        } else { // se não houver erro
            console.log('Conectado ao banco de dados');
        } 
    }, { userNewUrlParser: true });
}