const Mock = require('mockjs');
const { initConnection } = require('../models/connection/index');
const userModel = require('../models/schema/users');

const { Random } = Mock;

// 随机数据的方法
function randomData(num) {
   return Mock.mock({
      [`users|${num}`]: [
         {
            // 随机的作者名
            username: '@first',
            nickname: '@name',
            'age|18-35': 1,
            password: '@string("number", 8, 10)',
            'gender|0-1': 1,
            // 内容
            avatar: '@url',
            school: '@cword(3, 5)',
            createdAt: '@datetime',
            'integration|300-1000': 1,
            record: [],
            roles() {
               const list = [ 'admin', 'employee', 'visitor' ];
               const set = new Set();
               for (let i = 0; i < Random.integer(0, 3); i += 1) {
                  set.add(list[Random.integer(0, 2)]);
               }
               return [ ...set ];
            },
         },
      ],
   });
}
const reuslt = randomData(100);

initConnection().then(async () => {
   await userModel.deleteMany({});

   await userModel.insertMany({
      username: 'isenTang',
      nickname: 'isen',
      age: 30,
      gender: 1,
      integration: 1000,
      password: '12341234',
      avatar: 'https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png',
      school: '测试',
      roles: [ 'admin', 'employee', 'visitor' ],
      createdAt: new Date(),
      record: [],
   });
   await userModel.insertMany(reuslt.users);
   console.log('操作成功');
});

