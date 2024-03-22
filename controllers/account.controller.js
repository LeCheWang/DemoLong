const accountModel = require('../models/account.model');

module.exports = {
  getAccounts: async (req, res) => {
    const accounts = await accountModel.find();
    return res.status(200).json(accounts);
  },
};
