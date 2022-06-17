const mongoose = require('mongoose');

async function initConnection() {
   await mongoose.connect('mongodb://banyuan:banyuan123@49.235.98.65/banyuan', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   }, (error) => {
      if (error) {
         console.log(error);
      }

      console.log('mongodb connection success');
   });
}

module.exports = {
   initConnection,
};
