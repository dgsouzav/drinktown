const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const tokenConfig = require('../config/token');

const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email } = req.body; 
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'Usuário já cadastrado' });
        }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error: 'Falha no registro' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).send({ error: 'Usuário não encontrado' });
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Senha inválida' });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, tokenConfig.secret, {
        expiresIn: 86400,
    });

    res.send({ user, token });
});

router.get('/', async (req, res) => {
    try { 
        const user = await User.find();

        return res.send({ user });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na consulta' });
    }
});

router.put('/', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

        return res.send({ user });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na atualização' });
    }
});

router.delete('/', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId);

        return res.send();
    } catch (err) {
        return res.status(500).send({ error: 'Falha na remoção' });
    }
});

module.exports = app => app.use('/user', router);