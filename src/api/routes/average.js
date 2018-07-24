
module.exports = function(app) {
    var controller = app.controllers.users;
  
    app.route('/v1/average')
      .post(controller.getAverage);
  };
  