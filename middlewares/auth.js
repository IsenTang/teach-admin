const _ = require('lodash');
const usersModel = require('../models/users');
const Woops = require('../common/error');

async function auth(ctx, next) {
   const { user: userId } = ctx.header;

   if (!userId) {
      throw new Woops('auth-failed', '你需要先登录。');
   }

   const result = await usersModel.findOne({ _id: userId });

   if (!result) {
      throw new Woops('auth-failed', '你需要先登录。');
   } else {
      await next();
   }
}

module.exports = auth;
