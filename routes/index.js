const user = require('./users');
const shop = require('./shop');
const admin = require('./admin');
const search = require('./search');

module.exports = (router) => {
   user(router);
   shop(router);
   admin(router);
   search(router);
};
