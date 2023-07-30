const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Add a product
router.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = new Product({
      name,
      price,
    });

    await product.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
