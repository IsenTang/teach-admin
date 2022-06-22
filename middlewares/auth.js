const authService = require('../services/auth');
const Woops = require('../common/error');

async function auth(ctx, next) {
   const { authorization: token } = ctx.header;

   if (!token) {
      throw new Woops('auth-failed', '你需要先登录。');
   }

   // * 解析token
   const result = authService.verify(token);

   if (!result) {
      throw new Woops('auth-failed', '你需要先登录。');
   } else {
      await next();
   }
}

module.exports = auth;
