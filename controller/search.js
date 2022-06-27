const service = require('../services/admin');

async function getContent(ctx) {
   const { keyword } = ctx.request.query;

   const result = await service.findShopItem({ keyword });

   ctx.response.body = result;
}

module.exports = {
   getContent,
};
