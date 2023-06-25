const routesModel = require('../models/schema/routes');
const roleModel = require('../models/schema/role');
const permissionList = require('../config/permissionTestList');

// ? 获取所有路由列表
async function getRouteList(ctx) {
   const list = await routesModel.find({});
   ctx.response.body = list;
}

// ? 获取所有角色
async function getRoleList(ctx) {
   const list = await roleModel.find({});
   ctx.response.body = list;
}

// ? 通过id获取单一角色
async function getSingleRole(ctx) {
   const { id } = ctx.request.query;
   const role = await roleModel.findById(id);
   ctx.response.body = role;
}

// ? 获取所有权限列表,测试使用
async function getTestPermissionList(ctx) {
   ctx.response.body = permissionList;
}

// ? 更新角色
async function updateRole(ctx) {
   const { id, permission, name } = ctx.request.body;
   const role = await roleModel.findById(id);
   // * 如果角色不存在
   if (!role) {
      ctx.response.status = 404;
      ctx.response.body = {
         message: '角色不存在',
      };
      return;
   }

   // * 更新角色
   await roleModel.findByIdAndUpdate(id, { permission, name });

   ctx.response.body = {
      status: true,
      msg: '操作成功',
   };
}

// ? 新增角色
async function addRole(ctx) {
   const { name, permission } = ctx.request.body;

   // * 先检查重名
   const role = await roleModel.findOne({ name });
   // * 如果角色已经存在
   if (role) {
      ctx.response.status = 500;
      ctx.response.body = {
         message: '角色名重复',
      };
      return;
   }
   await roleModel.create({ name, permission });
   ctx.response.body = {
      status: true,
      msg: '成功',
   };
}

module.exports = {
   getRouteList,
   getRoleList,
   getTestPermissionList,
   updateRole,
   getSingleRole,
   addRole,
};
