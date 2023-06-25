const mongoose = require('mongoose');

const { Schema } = mongoose;

const routesSchema = new Schema({
   path: String, // 路径
   title: String, // 标题(路由名)
   children: {
      type: Array,
      required: false,
   }, // 子路由
});

const Model = mongoose.model('routes', routesSchema);

module.exports = Model;

