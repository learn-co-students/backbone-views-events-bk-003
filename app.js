var app = {};
function bootstrap() {
  // instantiate your view object and append it's HTML to the DOM.
  // attach your view object to the global app object so we have access to it anywhere. 
  var View = new MainView();
  app.mainView = View;
  $("body").append(app.mainView.el)
}