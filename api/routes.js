/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/18/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// module.exports = function(app) {
//     var controller = require('./controllers/todo.controller');
  
//     // todoList Routes
//     app.route('/todo')
//       .get(controller.get)
//       .post(controller.store);
  
//     app.route('/todo/:id')
//       .get(controller.detail)
//       .put(controller.update)
//       .delete(controller.delete);
//   };
const controller = require('./controllers/todo.controller');
const express = require('express');
const todoRoutes = express.Router();
// todoRoutes.route('/todo').get(controller.get).post(controller.store);
todoRoutes.route('/todo').get(controller.get);
// todoRoutes.route('/todo/:id').get(controller.detail).put(controller.update).delete(controller.delete);
module.exports = todoRoutes;