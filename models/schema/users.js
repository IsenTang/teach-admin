const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
   username: String,
   password: String,
   gender: Number,
   avatar: String, // 头像
   school: String,
   nickname: String,
   age: Number,
   createdAt: { type: Date, default: Date.now },
   integration: { type: Number, default: 500 }, // 积分
   record: { type: Array, default: [] },
   roles: { type: Array },
});

const UsersModel = mongoose.model('users', usersSchema);

module.exports = UsersModel;

