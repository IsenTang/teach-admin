const _ = require('lodash');
/*
 * 检查姓名正则
 *
*/
function checkName(str) {
   const regExp = new RegExp('[\\u4E00-\\u9FFF]+', 'g');

   return !regExp.test(str);
}

/*
 * 检查密码正则
*/
function checkPassword(str) {
   const pattern = /^(\w){6,20}$/;

   return pattern.test(str);
}

/*
 * 获取随机头像
*/
function getRandomAvatar(gender) {
   const manAvatars = [
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man1.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man2.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man3.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man4.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man5.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man6.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man7.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man8.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/man9.jpg',
   ];

   const womanAvatars = [
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman1.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman2.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman3.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman4.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman5.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman6.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman7.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman8.jpg',
      'https://by-image.oss-cn-shanghai.aliyuncs.com/vue/avatar/woman9.jpg',
   ];

   const index = _.random(0, 8);
   if (Number(gender) === 1) {
      return manAvatars[index];
   }
   return womanAvatars[index];
}

module.exports = {
   checkName,
   checkPassword,
   getRandomAvatar,
};
