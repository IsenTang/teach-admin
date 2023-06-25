const user = require('./users');
const shop = require('./shop');
const admin = require('./admin');
const search = require('./search');
const permission = require('./permission');

module.exports = (router) => {
   user(router);
   shop(router);
   admin(router);
   search(router);
   permission(router);
};
