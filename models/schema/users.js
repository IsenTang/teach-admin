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
   createdAt: { type: Date, default: new Date() },
   integration: { type: Number, default: 500 }, // 积分
   record: { type: Array, default: [] },
});

const UsersModel = mongoose.model('users', usersSchema);

module.exports = UsersModel;

