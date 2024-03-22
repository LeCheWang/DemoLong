const express = require('express');

const router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  findProductById,
  getProductsByCategoryId,
} = require('../controllers/product.controller');

router.route('/').post(createProduct).get(getProducts);

router.route('/category/:category_id').get(getProductsByCategoryId);

router.route('/:id').get(findProductById);

module.exports = router;
