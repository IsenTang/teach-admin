const shopServices = require('../services/shop');
/*
 * 积分商品列表
*/
async function shopList(ctx) {
   const result = await shopServices.shopList();

   ctx.response.body = result;
}

/*
 * 兑换商品
*/
async function exchange(ctx) {
   await shopServices.exchange(ctx);

   ctx.response.body = {
      success: true,
   };
}

/*
 * 兑换记录
 */
async function exchangedRecord(ctx) {
   const result = await shopServices.exchangedRecord(ctx);

   ctx.response.body = result;
}

module.exports = {
   shopList,
   exchange,
   exchangedRecord,
};
