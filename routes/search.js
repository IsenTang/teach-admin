const controller = require('../controller/search');

module.exports = (router) => {
   /**
 * @swagger
 *
 * /search/content:
 *   get:
 *     description: 按名字查找
 *     parameters:
 *       - name: keyword
 *         description: 关键字
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 注册成功返回success：true
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
   router.get('/search/content', controller.getContent);
};
