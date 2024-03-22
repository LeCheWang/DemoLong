const productModel = require('../models/product.model');

module.exports = {
  createProduct: async (req, res) => {
    const body = req.body;
    const product = await productModel.create(body);
    return res.status(201).json(product);
  },
  getProducts: async (req, res) => {
    const page = req.query.page || 1;
    const per_page = 10;

    const products = await productModel
      .find()
      .populate('category_id')
      .sort({ createdAt: -1 })
      .skip(page * per_page - per_page)
      .limit(per_page)
      .exec();

    const count = await productModel.countDocuments();

    return res.status(200).json({
      current_page: +page,
      total_page: Math.ceil(count / per_page),
      count: count,
      data: products,
    });
  },
  updateProduct: async (req, res) => {},
  deleteProduct: async (req, res) => {},
  findProductById: async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
  },
  getProductsByCategoryId: async (req, res) => {
    const page = req.query.page || 1;
    const per_page = 10;
    const category_id = req.params.category_id;
    const body_query = { category_id };

    const products = await productModel
      .find(body_query)
      .populate('category_id')
      .sort({ createdAt: -1 })
      .skip(page * per_page - per_page)
      .limit(per_page)
      .exec();

    const count = await productModel.countDocuments(body_query);

    return res.status(200).json({
      current_page: +page,
      total_page: Math.ceil(count / per_page),
      count: count,
      data: products,
    });
  },
};
