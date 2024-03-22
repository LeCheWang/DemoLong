const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const authRouter = require('./auth.router');
const accountRouter = require('./account.router');

const errorHandle = require('../middlewares/error.handle');

module.exports = (app) => {
  app.use('/api/categories', categoryRouter);
  app.use('/api/products', productRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/accounts', accountRouter);
  
  app.use(errorHandle);
};
