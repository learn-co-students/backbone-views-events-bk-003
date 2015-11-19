var app = {};
function bootstrap() {
  var view = new MainView();
  app.mainView = view 
  $('body').append(view.el);
  // instantiate your view object and append it's HTML to the DOM.
  // attach your view object to the global app object so we have access to it anywhere. 
}