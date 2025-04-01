const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/products');

router.get('/', getProducts);
router.post('/', createProduct); // Add auth middleware in production

module.exports = router;