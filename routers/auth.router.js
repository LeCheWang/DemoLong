const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth.controller');
const asyncMiddleware = require("../middlewares/async.middleware");

router.route('/register').post(asyncMiddleware(register));
router.route('/login').post(asyncMiddleware(login));

module.exports = router;
