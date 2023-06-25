const shopItemsModel = require('../models/shop');
const Woops = require('../common/error');

async function shopList({ page, limit }) {
   try {
      const list = await shopItemsModel.find({
         query: {},
         sort: { isDeleted: 1, createdAt: -1 },
         page,
         limit,
      });

      const total = await shopItemsModel.count();

      return {
         list, total,
      };
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

/*
 * 添加一个商品
*/
async function insertShopItem(ctx) {
   try {
      const { name, price, image } = ctx.request.body;

      await shopItemsModel.insertOne({ name, price, image });
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

/*
 * 更新商品信息
 */
async function updateShopItem(ctx) {
   try {
      const { data } = ctx.request.body;

      const {
         _id, name, price, image,
      } = data;

      // 更新
      await shopItemsModel.updateOne({
         query: {
            _id,
         },
         updated: {
            name,
            price,
            image,
         },
      });

      // 查询返回
      const result = await shopItemsModel.findOne({
         query: {
            _id,
         },
      });

      return result;
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

/*
 *  删除商品
*/
async function deleteShopItem(ctx) {
   try {
      const { id, isDeleted = true } = ctx.request.body;

      // 逻辑删除
      await shopItemsModel.updateOne({
         query: {
            _id: id,
         },
         updated: {
            isDeleted,
         },
      });
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

/**
 * 查找商品
*/
async function findShopItem({ keyword }) {
   const result = await shopItemsModel.queryFind({
      query: {
         name: { $regex: keyword, $options: 'i' },
      },
   });
   return result;
}

async function getShopItem({ id }) {
   const result = await shopItemsModel.findOne({
      query: {
         _id: id,
      },
   });
   return result;
}

module.exports = {
   insertShopItem,
   updateShopItem,
   deleteShopItem,
   shopList,
   findShopItem,
   getShopItem,
};
