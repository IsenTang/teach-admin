const ShopItemsModel = require('./schema/shop');

/*
 * 插入一条数据
*/
async function insertOne(data) {
   const model = new ShopItemsModel(data);

   await model.save();
}

/*
 * 查找数据
*/
async function find({
   query, sort, page, limit,
}) {
   const result = await ShopItemsModel.find(query)
      .sort(sort).skip((Number(page) - 1) * Number(limit)).limit(Number(limit))
      .lean()
      .exec();
   return result;
}

async function count() {
   const result = await ShopItemsModel.find({}).count();
   return result;
}

/*
 * 查找单条数据
*/
async function findOne({ query }) {
   const result = await ShopItemsModel.findOne(query).lean().exec();
   return result;
}

/**
 * update
 */
async function updateOne({ query, updated }) {
   const result = await ShopItemsModel.updateOne(query, updated, { upsert: true });

   return result;
}

module.exports = {
   insertOne,
   findOne,
   find,
   updateOne,
   count,
};
