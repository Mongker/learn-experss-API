const low = require('lowdb')
// thư viện lowdb
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({todo: []})
  .write();

module.exports = db;