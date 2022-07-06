const controller = require('../controller/admin');
const auth = require('../middlewares/auth');

module.exports = (router) => {
   /**
 * @swagger
 *
 * /admin/shopList:
 *   get:
 *     description: 获取所有shop items
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: 页码
 *         in: formData
 *         required: true
 *         type: number
 *       - name: limit
 *         description: 一页条数
 *         in: formData
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: 成功返回商品列表
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/ShopItem'
 *       500:
 *          description: 请求失败
 *          schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/admin/shopList', auth, controller.getShopList);

   /**
 * @swagger
 *
 * /admin/shopItem:
 *   get:
 *     description: 获取单个商品信息
 *     parameters:
 *       - name: id
 *         description: 商品id
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 删除成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ShopItem'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/admin/shopItem', auth, controller.getShopItem);

   /**
 * @swagger
 *
 * /admin/shopItem:
 *   post:
 *     description: 添加 shop item
 *     parameters:
 *       - name: name
 *         description: 商品名
 *         in: formData
 *         required: true
 *         type: string
 *       - name: price
 *         description: 商品所需兑换积分
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 加入成功返回success：true
 *         schema:
 *           type: object
 *           properties:
 *              success:
 *                type: boolean
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.post('/admin/shopItem', auth, controller.insertShopItem);

   /**
 * @swagger
 *
 * /admin/shopItem:
 *   put:
 *     description: 更改商品信息
 *     parameters:
 *       - name: data
 *         description: 所需更新的商品内容
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ShopItem'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 修改成功返回success：true
 *         schema:
 *           type: object
 *           properties:
 *              success:
 *                type: boolean
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.put('/admin/shopItem', auth, controller.updateShopItem);

   /**
 * @swagger
 *
 * /admin/shopItem:
 *   delete:
 *     description: 下架商品
 *     parameters:
 *       - name: id
 *         description: 商品id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: idDeleted
 *         description: 是否下架
 *         in: formData
 *         type: boolean
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 删除成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.delete('/admin/shopItem', auth, controller.deleteShopItem);
};
