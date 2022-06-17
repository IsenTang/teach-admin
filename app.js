const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const views = require('koa-views');
const cors = require('@koa/cors');
const { koaSwagger } = require('koa2-swagger-ui');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');

const config = require('./config');
const routes = require('./routes');

// 错误处理中间件
const errorMiddleware = require('./middlewares/error');

// swagger 配置文件
const swaggerSpec = require('./swagger.conf');

// 数据库初始化
const { initConnection } = require('./models/connection');

initConnection();

// error handler
app.use(errorMiddleware);

// middlewares
app.use(bodyparser())
   .use(json())
   .use(logger())
   .use(cors())
   .use(require('koa-static')(`${__dirname}/public`))
   .use(views(path.join(__dirname, '/views'), {
      options: { settings: { views: path.join(__dirname, 'views') } },
      map: { njk: 'nunjucks' },
      extension: 'njk',
   }))
   .use(router.routes())
   .use(router.allowedMethods());

app.use(
   koaSwagger({
      routePrefix: '/swagger', // host at /swagger instead of default /docs
      swaggerOptions: {
         url: 'http://49.235.98.65:3000/apijson', // example path to json
         // url: 'http://localhost:3000/apijson',
      },
   }),
);

// 为swagger ui提供json格式数据
router.get('/apijson', async (ctx, next) => {
   // ctx.body = 'Hello World'
   ctx.body = swaggerSpec;
});

routes(router);

module.exports = app.listen(config.port, () => {
   console.log(`Listening on http://localhost:${config.port}`);
});
