module.exports = function(app) {
    var controller = require('./controllers/todo.controller');
  
    // todoList Routes
    app.route('/todo')
      .get(controller.get)
      .post(controller.store);
  
  
    app.route('/todo/:id')
      .get(controller.detail)
      .put(controller.update)
      .delete(controller.delete);
  };