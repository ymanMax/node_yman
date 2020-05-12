const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://127.0.0.1:27017';

const sql = {
  insert: (database, collections, insertData) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl, (err, client) => {
        if (err) throw err;
        const db = client.db(database);
        const opeCollections = db.collection(collections);
        opeCollections.insert(insertData, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
          client.close();
        });
      });
    });
  },
  remove: (database, collections, removeData) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl, (err, client) => {
        if (err) throw err;
        const db = client.db(database);
        const opeCollections = db.collection(collections);
        opeCollections.remove(removeData, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
          client.close();
        });
      });
    });
  },
  update: (database, collections, updateType, updateBefore, updateAfter) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl, (err, client) => {
        if (err) throw err;
        const db = client.db(database);
        const opeCollections = db.collection(collections);
        opeCollections[updateType](updateBefore, updateAfter, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
          client.close();
        });
      });
    });
  },
  find: (database, collections, whereData) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl, (err, client) => {
        if (err) throw err;
        const db = client.db(database);
        const opeCollections = db.collection(collections);
        opeCollections.find(whereData).toArray((err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
          client.close();
        });
      });
    });
  },
};

module.exports = sql;