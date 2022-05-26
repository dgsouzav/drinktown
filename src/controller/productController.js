const express = require('express');

const Product = require('../models/product');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.send({ product });
    } catch (err) {
        return res.status(500).send({ error: 'Falha no registro' });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();

        return res.send({ products });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na consulta' });
    }
});

router.put('/:productId', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });

        return res.send({ product });
    } catch (err) {
        return res.status(500).send({ error: 'Falha na atualização' });
    }
});

router.delete('/:productId', async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.productId);

        return res.send();
    } catch (err) {
        return res.status(500).send({ error: 'Falha na remoção' });
    }
});

// exporta somente o router
// altera o nome da rota para produto
module.exports = app => app.use('/product', router);