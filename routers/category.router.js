const express = require('express');

const router = express.Router();

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');
const asyncMiddleware = require('../middlewares/async.middleware');

router.route('/').post(asyncMiddleware(createCategory));

module.exports = router;
