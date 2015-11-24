var app = {};
function bootstrap() {
  var view = new MainView();
  app.mainView = view;
  $('body').append(app.mainView.el);
}

