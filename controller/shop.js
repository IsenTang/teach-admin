const shopServices = require('../services/shop');
/*
 * 积分商品列表
*/
async function shopList(ctx, next) {
   const result = await shopServices.shopList();

   ctx.response.body = result;
}

/*
 * 兑换商品
*/
async function exchange(ctx, next) {
   await shopServices.exchange(ctx);

   ctx.response.body = {
      success: true,
   };
}

/*
 * 兑换记录
 */
async function exchangedRecord(ctx, next) {
   const result = await shopServices.exchangedRecord(ctx);

   ctx.response.body = result;
}

module.exports = {
   shopList,
   exchange,
   exchangedRecord,
};
