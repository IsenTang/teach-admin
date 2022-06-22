const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
   info: {
      // API informations (required)
      title: '管理后台', // Title (required)
      version: '1.0.0', // Version (required)
      description: '管理后台api接口文档', // Description (optional)
   },
   host: 'localhost:3000', // Host (optional)
   basePath: '/', // Base path (optional)
};

const options = {
   swaggerDefinition,
   apis: [ './routes/*.js' ], // all api
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
