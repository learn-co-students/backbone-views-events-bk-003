var app = {};
function bootstrap() {
  var mainView = new MainView();
  app.mainView = mainView;
  $('body').append(mainView.el)
  // instantiate your view object and append it's HTML to the DOM.
  // attach your view object to the global app object so we have access to it anywhere. 
}