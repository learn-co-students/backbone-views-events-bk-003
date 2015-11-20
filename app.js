var app = {};

function bootstrap() {
	debugger
  var mainView = new MainView();
  app.mainView = mainView;
  $('body').append(mainView.el);
}