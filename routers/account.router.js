const express = require('express');
const router = express.Router();

const { getAccounts } = require('../controllers/account.controller');
const asyncMiddleware = require("../middlewares/async.middleware");

router.route('/').get(asyncMiddleware(getAccounts));

module.exports = router;
