const Woops = require('../common/error');

async function validate(schema, body, next) {
   const result = schema.validate(body);

   if (result.error) {
      throw new Woops('request-body-invalid', 'request-body-invalid', result.error.details);
   } else {
      await next();
   }
}

module.exports = {
   validate,
};
