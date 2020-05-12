const sql = require('./js/tool/sql');

sql.find('yman', 'userInfo', {age: 18}).then((res) => {
  console.log(res);
}).catch(err => console.log(err));
