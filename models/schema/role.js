const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
   name: String, // 角色名
   createdAt: {
      type: Date,
      default: Date.now,
   }, // 创建时间
   permission: Array, // 拥有权限
});

const Model = mongoose.model('roles', roleSchema);

module.exports = Model;

