const controller = require('../controller/permission');
const auth = require('../middlewares/auth');

module.exports = (router) => {
   /**
 * @swagger
 *
 * /roles:
 *   get:
 *     description: 获取所有角色列表
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 注册成功返回success：true
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/Role'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/roles', auth, controller.getRoleList);
   /**
 * @swagger
 *
 * /role:
 *   get:
 *     description: 通过id获取用户角色
 *     parameters:
 *       - name: id
 *         description: 用户id
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 成功返回角色信息
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Role'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/role', auth, controller.getSingleRole);
   /**
 * @swagger
 *
 * /role:
 *   post:
 *     description: 添加角色
 *     parameters:
 *       - name: name
 *         description: 角色名称
 *         required: true
 *         type: string
 *       - name: permission
 *         description: 包含的权限
 *         required: true
 *         type: array
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.post('/role', auth, controller.addRole);

   /**
 * @swagger
 *
 * /role:
 *   put:
 *     description: 更新角色
 *     parameters:
 *       - name: id
 *         description: 角色id
 *         required: true
 *         type: string
 *       - name: name
 *         description: 角色名称
 *         required: true
 *         type: string
 *       - name: permission
 *         description: 包含的权限
 *         required: true
 *         type: array
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.put('/role', auth, controller.updateRole);

   /**
 * @swagger
 *
 * /permission/test/list:
 *   get:
 *     description: 获取所有权限列表,测试使用
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 注册成功返回success：true
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/Route'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/permission/test/list', controller.getTestPermissionList);
};
