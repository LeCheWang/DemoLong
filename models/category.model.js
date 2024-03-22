const mongoose = require('mongoose');

const categoryScheme = mongoose.Schema(
  {
    //_id: tự động sinh
    name: {
      type: String,
      required: true, //not null
      unique: true, //độc nhất
    },
    img: {
      type: String,
      requried: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, //tự động thêm 2 trường: createdAt và updatedAt
  },
);

module.exports = mongoose.model('category', categoryScheme);
//=> categories
//sql: table
//nosql collection document
