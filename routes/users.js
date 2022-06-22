const controller = require('../controller/users');
const auth = require('../middlewares/auth');

module.exports = (router) => {
   /**
 * @swagger
 *
 * /user/regist:
 *   post:
 *     description: 注册用户
 *     parameters:
 *       - name: username
 *         description: 用户名
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: 密码
 *         in: formData
 *         required: true
 *         type: string
 *       - name: school
 *         description: 学校
 *         in: formData
 *         required: true
 *         type: string
 *       - name: nickname
 *         description: 昵称
 *         in: formData
 *         required: true
 *         type: string
 *       - name: age
 *         description: 年龄
 *         in: formData
 *         required: true
 *         type: string || number
 *       - name: gender
 *         description: 性别 1为男，0为女
 *         in: formData
 *         required: true
 *         type: number
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 注册成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.post('/user/regist', controller.regist);

   /**
 * @swagger
 *
 * /user/login:
 *   post:
 *     description: 登录
 *     parameters:
 *       - name: username
 *         description: 用户名
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: 密码
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 登录成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/LoginResponse'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.post('/user/login', controller.login);

   /**
 * @swagger
 *
 * /user/changePassword:
 *   put:
 *     description: 更改密码
 *     parameters:
 *       - name: oldPassword
 *         description: 旧密码
 *         in: formData
 *         required: true
 *         type: string
 *       - name: newPassword
 *         description: 新密码
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 修改成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.put('/user/changePassword', auth, controller.changePassword);

   /**
 * @swagger
 *
 * /user/userinfo:
 *   get:
 *     description: 更改密码
 *     parameters:
 *       - name: id
 *         description: 用户id
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 修改成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Userinfo'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/user/userinfo', auth, controller.userInfo);

   /**
 * @swagger
 *
 * /user/users:
 *   get:
 *     description: 获取所有用户
 *     parameters:
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 用户列表
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/User'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/user/users', auth, controller.getUsers);

   /**
 * @swagger
 *
 * /user:
 *   put:
 *     description: 更改用户信息
 *     parameters:
 *       - name: id
 *         description: 用户id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: integration
 *         description: 积分
 *         in: formData
 *         required: true
 *         type: number
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 修改成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.put('/user', auth, controller.updateUser);
};
