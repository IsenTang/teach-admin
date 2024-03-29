const _ = require('lodash');
const {
   findOne, insertOne, update, find,
} = require('../models/users');
const { checkName, checkPassword, getRandomAvatar } = require('../common/utils');
const Woops = require('../common/error');
const authService = require('./auth');
const permissionList = require('../config/permissionTestList');
const roleModel = require('../models/schema/role');

async function regist(ctx) {
   const {
      username, password,
   } = ctx.request.body;

   if (!checkName(username)) {
      throw new Woops('username-illegal', '用户名格式错误');
   }

   if (!checkPassword(password)) {
      throw new Woops('password-illegal', '密码格式错误');
   }

   const result = await findOne({ query: { username } });

   if (result) {
      throw new Woops('user-duplicate', '用户名重复');
   }

   try {
      const data = ctx.request.body;

      data.avatar = getRandomAvatar(_.get(data, 'gender'));

      await insertOne(data);
   } catch (error) {
      throw new Woops('database-error', error.message);
   }
}

async function login(ctx) {
   const {
      username, password,
   } = ctx.request.body;

   if (!checkName(username)) {
      throw new Woops('username-illegal', '用户名格式错误');
   }

   if (!checkPassword(password)) {
      throw new Woops('password-illegal', '密码格式错误');
   }

   const result = await findOne({ query: ctx.request.body });

   if (!result) {
      throw new Woops('login-error', '用户名密码错误');
   } else {
      // * 去掉record，获取用户token（缩短token长度）
      // * 生成token,放入用户信息
      const token = authService.encode(_.omit(result, [ 'record' ]));
      result.token = token;
      return result;
   }
}

async function changePassword(ctx) {
   try {
      const { oldPassword, newPassword } = ctx.request.body;

      if (!checkPassword(oldPassword) || !checkPassword(newPassword)) {
         throw new Woops('password-illegal', '密码格式错误');
      }

      // 获取id,从头部token获取
      const { authorization: token } = ctx.header;
      const { _id: userId } = authService.verify(token);

      // 先查看旧密码是否正确
      const user = await findOne({ query: { _id: userId, password: oldPassword } });

      if (!user) {
         throw new Woops('password-incorrect', '旧密码不正确');
      }

      // 更新密码
      await update({
         query: { _id: userId },
         updated: {
            $set: {
               password: newPassword,
            },
         },
      });
   } catch (e) {
      throw new Woops(e.code, e.message);
   }
}

async function userInfo(ctx) {
   const { id } = ctx.request.query;

   try {
      const result = await findOne({ query: { _id: id } });

      if (result) {
         return result;
      }
      throw new Woops('user-no-exist', '用户不存在');
   } catch (e) {
      throw new Woops(e.code, e.message);
   }
}

async function getUsers() {
   try {
      const result = await find({ query: {}, fileds: { password: 0 } });

      return result;
   } catch (e) {
      throw new Woops('database-error', e.message);
   }
}

async function updateUser({ query, updated }) {
   try {
      const result = await update({
         query,
         updated,
      });
      return result;
   } catch (e) {
      throw new Woops(e.code, e.message);
   }
}

async function filterPermission(roles) {
   // * 根据roles获取所有的权限
   const permissions = await Promise.all(roles.map((item) => roleModel.findOne({ name: item })));
   // * 合并去重
   let array = [];
   permissions.forEach((item) => {
      array = array.concat(item.permission);
   });
   array = [ ...new Set(array) ];
   // * 获取一级菜单
   let menu = permissionList.filter((item) => item.pid === 0);

   // * 获取有权限的菜单
   menu = menu.filter((item) => array.includes(item.id));
   return menu;
}

module.exports = {
   regist,
   login,
   changePassword,
   userInfo,
   getUsers,
   updateUser,
   filterPermission,
};
