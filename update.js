const sql = require('./js/tool/sql');

sql.update('yman', 'userInfo', 'updateOne', {username: '王了了'}, { $set: { username: '王先森' } }).then(() => {
  console.log('数据修改成功');
}).catch(err => console.log(err));

sql.update('yman', 'userInfo', 'updateMany', {password: '123456'}, { $set: { age: 18 } }).then(() => {
  console.log('数据修改成功');
}).catch(err => console.log(err));
