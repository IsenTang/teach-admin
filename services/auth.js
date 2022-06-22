const jwt = require('jsonwebtoken');
const Woops = require('../common/error');
const config = require('../config');

// * 编码token
// * 过期时间1天
function encode(val) {
   return jwt.sign(val, config.tokenKey, { expiresIn: 24 * 60 * 60 });
}

// * 解码token
function verify(token) {
   try {
      // * 针对 Bearer开头
      if (token.includes('Bearer')) {
         // eslint-disable-next-line
         token = token.split(' ')[1];
      }

      return jwt.verify(token, config.tokenKey);
   } catch (error) {
      throw new Woops('auth-failed', '你需要先登录。');
   }
}

module.exports = {
   encode,
   verify,
};
