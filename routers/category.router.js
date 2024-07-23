const express = require('express');
const multer = require('multer');

const router = express.Router();

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');
const asyncMiddleware = require('../middlewares/async.middleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route('/').post(upload.single('img'), asyncMiddleware(createCategory));

module.exports = router;
