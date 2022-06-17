const { boolean } = require('@hapi/joi');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopItemsSchema = new Schema({
   name: String,
   price: Number,
   image: String,
   createdAt: { type: Date, default: Date.now() },
   isDeleted: { type: Boolean, default: false },
});

const ShopItemsModel = mongoose.model('shopitems', shopItemsSchema);

module.exports = ShopItemsModel;

