module.exports = {

   /**
   * @swagger
   *
   * definitions:
   *   NormalResponse:
   *     type: object
   *     properties:
   *       success:
   *         type: boolean
   *   ErrorResponse:
   *      type: object
   *      properties:
   *        code:
   *         type: string
   *        message:
   *         type: string
   *        detail:
   *         type: object
   *   LoginResponse:
   *      type: object
   *      properties:
   *        success:
   *            type: boolean
   *        user:
   *            type: object
   *            $ref: '#/definitions/Userinfo'
   *   Userinfo:
   *      type: object
   *      properties:
   *        id:
   *          type: string
   *        username:
   *          type: string
   *        school:
   *          type: string
   *        nickname:
   *          type: string
   *        age:
   *          type: string
   *        token:
   *           type: string
   *   User:
   *      type: object
   *      properties:
   *        id:
   *          type: string
   *        username:
   *          type: string
   *        school:
   *          type: string
   *        nickname:
   *          type: string
   *        age:
   *          type: string
   *   ShopItem:
   *      type: object
   *      properties:
   *        _id:
   *          type: string
   *        name:
   *          type: string
   *        price:
   *          type: string
   *        image:
   *          type: string
   *   RecordItem:
   *      type: object
   *      properties:
   *        _id:
   *          type: string
   *        name:
   *          type: string
   *        price:
   *          type: number
   *        createdAt:
   *          type: string
   *          format: date-time
   */
};
