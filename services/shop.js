const _ = require('lodash');
const shopItemsModel = require('../models/shop');
const usersModel = require('../models/users');
const Woops = require('../common/error');

/*
 * 积分商品列表
*/
async function shopList() {
   try {
      return await shopItemsModel.find({ query: { isDeleted: false } });
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

/*
 * 积分兑换
 */
async function exchange(ctx) {
   // 用户id,从header中获取
   const { user: userId } = ctx.header;

   // 商品id
   const { id } = ctx.request.body;

   // 先查看user内积分信息
   const user = await usersModel.findOne({ query:{ _id: userId } });

   let integration = _.get(user, 'integration', 0);

   // 查看shopitem信息
   const shopItem = await shopItemsModel.findOne({ query: { _id: id } });

   const price = _.get(shopItem, 'price');

   // 如果积分足够
   if (integration >= price) {
      // 减去积分
      integration -= price;

      // 记录兑换时间
      _.set(shopItem, 'exchangeDate', new Date());

      // 更新数据库
      await usersModel.update(
         {
            query: { _id: userId },
            updated: {
               $push: {
                  record: shopItem,
               },
               $set: {
                  integration,
               },
            },
         },
      );
   } else {
      throw new Woops('integration-not-enough', '积分不足');
   }
}

/*
 * 兑换记录
*/
async function exchangedRecord(ctx) {
   try {
      const { id } = ctx.request.query;
      const result = await usersModel.findOne({ query:{ _id: id } });

      return _.get(result, 'record', []);
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

module.exports = {
   shopList,
   exchange,
   exchangedRecord,
};
