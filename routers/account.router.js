const express = require('express');
const router = express.Router();

const { getAccounts } = require('../controllers/account.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddelware = require('../middlewares/auth.middelware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .get(
    asyncMiddleware(authMiddelware),
    roleMiddleware(['admin', 'user']),
    asyncMiddleware(getAccounts),
  );

module.exports = router;
