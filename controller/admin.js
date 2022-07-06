const joi = require('@hapi/joi');
const adminServices = require('../services/admin');
const { validate } = require('../services/common');

/*
 * 获取商品列表信息
*/
async function getShopList(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      page: joi.number().required(),
      limit: joi.number().required(),
   });

   await validate(schema, ctx.request.query, next);
   const { page, limit } = ctx.request.query;
   const result = await adminServices.shopList({ page, limit });

   ctx.response.body = result;
}

/*
 * 获取单个商品
*/
async function getShopItem(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      id: joi.string().required(),
   });

   await validate(schema, ctx.request.query, next);

   const data = await adminServices.getShopItem(ctx.request.query);

   ctx.response.body = {
      success: true,
      data,
   };
}

/*
 * 更新商品信息
*/
async function updateShopItem(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      data: joi.object(
         {
            _id: joi.string().required(),
            name: joi.string().required(),
            image: joi.string().required(),
            price: joi.alternatives().try(joi.string(),
               joi.number().integer()).required(),
         },
      ).required(),
   });

   await validate(schema, ctx.request.body, next);

   const result = await adminServices.updateShopItem(ctx);

   ctx.response.body = {
      success: true,
      data: result,
   };
}

/*
 * 插入商品信息
*/
async function insertShopItem(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      name: joi.string().required(),
      price: joi.number().required(),
      image: joi.string().required(),
   });

   await validate(schema, ctx.request.body, next);

   try {
      // 插入
      await adminServices.insertShopItem(ctx);

      ctx.response.body = {
         success: true,
      };
   } catch (error) {
      console.log(error);
   }
}

/*
 * 删除商品
*/
async function deleteShopItem(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      id: joi.string().required(),
      isDeleted: joi.boolean(),
   });

   await validate(schema, ctx.request.body, next);

   await adminServices.deleteShopItem(ctx);

   ctx.response.body = {
      success: true,
   };
}

module.exports = {
   getShopList,
   getShopItem,
   updateShopItem,
   insertShopItem,
   deleteShopItem,
};
