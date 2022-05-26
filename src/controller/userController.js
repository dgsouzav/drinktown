const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error: 'Falha no registro' });
    }
});

router.get('/', async (req, res) => {
    try { 
        const users = await User.find();

        return res.send({ users });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na consulta' });
    }
});

router.put('/:userId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

        return res.send({ user });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId);

        return res.send();
    } catch (err) {
        return res.status(500).send({ error: 'Falha na remoção' });
    }
});

// exporta somente o router
// melhor usar o nome de usuario (ou user se for usar em ingles) do que 'auth'

module.exports = app => app.use('/user', router);