const user = require('./users');
const shop = require('./shop');
const admin = require('./admin');

module.exports = (router) => {
   user(router);
   shop(router);
   admin(router);
};
