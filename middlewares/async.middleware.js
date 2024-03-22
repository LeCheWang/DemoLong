function asyncMiddleware(fn) {
  //fn => register, login
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) { 
      next(error);
    }
  };
}

module.exports = asyncMiddleware;
