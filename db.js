/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/18/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const low = require('lowdb')
// thư viện lowdb
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({todo: []})
  .write();

module.exports = db;