var app = {};
function bootstrap() {
  var mainView = new MainView// instantiate your view object and append it's HTML to the DOM.
  app.mainView = mainView;    // attach your view object to the global app object so we have access to it anywhere. 
  $('body').append(mainView.el)
}