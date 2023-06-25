const joi = require('@hapi/joi');
const userServices = require('../services/users');
const { validate } = require('../services/common');

// 用户注册
async function regist(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      username: joi.string().required(),
      password: joi.string().required(),
      gender: joi.alternatives().try(joi.string(),
         joi.number().integer()).required(),
      school: joi.string().required(),
      nickname: joi.string().required(),
      age: joi.alternatives().try(joi.string(),
         joi.number().integer().min(0).max(120)).required(),
   });

   await validate(schema, ctx.request.body, next);

   await userServices.regist(ctx);

   ctx.response.body = { success: true };
}

/*
 * 用户登录
*/
async function login(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      username: joi.string().required(),
      password: joi.string().required(),
   });

   await validate(schema, ctx.request.body, next);

   const user = await userServices.login(ctx);

   // * 通过用户权限，获取用户的菜单
   const menu = await userServices.filterPermission(user.roles);
   user.routes = menu;
   ctx.response.body = { success: true, user };
}

/*
 * 修改密码
*/
async function changePassword(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      oldPassword: joi.string().required(),
      newPassword: joi.string().required(),
   });

   await validate(schema, ctx.request.body, next);

   await userServices.changePassword(ctx);

   ctx.response.body = { success: true };
}

/*
 * 获取用户信息
*/
async function userInfo(ctx, next) {
   // 请求体检查
   const schema = joi.object().keys({
      id: joi.string().required(),
   });

   await validate(schema, ctx.request.query, next);

   const result = await userServices.userInfo(ctx);

   ctx.response.body = result;
}

/*
* 获取所有用户
*/
async function getUsers(ctx) {
   const result = await userServices.getUsers();

   ctx.response.body = result;
}

/*
* 更新用户
*/
async function updateUser(ctx) {
   const { id, integration, roles } = ctx.request.body;

   const result = await userServices.updateUser({
      query: {
         _id: id,
      },
      updated: {
         integration,
         roles,
      },
   });

   ctx.response.body = result;
}

module.exports = {
   regist,
   login,
   changePassword,
   userInfo,
   getUsers,
   updateUser,
};
