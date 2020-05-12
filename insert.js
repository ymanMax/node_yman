const sql = require('./js/tool/sql');

sql.insert('yman', 'userInfo', {username: '哇咔咔', password: '123456'}).then(() => {
  console.log('数据插入成功');
}).catch((err) => {
  console.log('数据插入成功', err);
});