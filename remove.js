const sql = require('./js/tool/sql');

sql.remove('yman', 'userInfo', {username: '王了'}).then(() => {
  console.log('数据删除成功');
}).catch(err => console.log(err));