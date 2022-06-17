const controller = require('../controller/shop');
const auth = require('../middlewares/auth');

module.exports = (router) => {
   /**
 * @swagger
 *
 * /shop/shopList:
 *   get:
 *     description: 积分商品列表
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 积分商品列表
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/ShopItem'
 *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/shop/shopList', controller.shopList);

   /**
 * @swagger
 *
 * /shop/exchange:
 *   put:
 *     description: 兑换商品
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
 *         description: 兑换商品成功返回success：true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/NormalResponse'
 */
   router.put('/shop/exchange', auth, controller.exchange);

   /**
 * @swagger
 *
 * /shop/exchangedRecord:
 *   get:
 *     description: 兑换记录
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
 *         description: 返回兑换过的记录
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/RecordItem'
  *       500:
 *         description: 请求失败
 *         schema:
 *           type: object
 *           $ref: '#/definitions/ErrorResponse'
 */
   router.get('/shop/exchangedRecord', auth, controller.exchangedRecord);
};
