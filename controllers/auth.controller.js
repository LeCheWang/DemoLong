const accountModel = require('../models/account.model');
const bcryptjs = require('bcryptjs');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    const newAccount = await accountModel.create(body);

    return res.status(201).json(newAccount);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({ username });
    if (!account) {
      throw new ErrorResponse(400, 'Tk hoặc MK k đúng');
    }

    // const checkPass = bcryptjs.compareSync(password, account.password);
    if (!bcryptjs.compareSync(password, account.password)) {
      //   return res.status(400).json({
      //     statusCode: 400,
      //     message: 'Tk hoặc MK k đúng',
      //   });
      throw new ErrorResponse(400, 'Tk hoặc MK k đúng');
    }

    //jwt

    return res.status(200).json({
      statusCode: 200,
      message: 'Đăng nhập thành công',
      data: account,
    });
  },
};
