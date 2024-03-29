const UsersModel = require('./schema/users');

/*
 * 插入一条数据
*/
async function insertOne(data) {
   const model = new UsersModel(data);

   await model.save();
}

/**
 * findAll
 */
async function find({ query, fileds }) {
   const result = await UsersModel.find(query, fileds).lean().exec();

   return result;
}

/**
 * findOne
 */
async function findOne({ query }) {
   const result = await UsersModel.findOne(query).lean().exec();

   return result;
}

/**
 * update
 */
async function update({ query, updated }) {
   const result = await UsersModel.updateOne(query, updated, { upsert: true });

   return result;
}

module.exports = {
   insertOne,
   findOne,
   update,
   find,
};
