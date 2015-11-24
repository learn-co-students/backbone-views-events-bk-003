var app = {};
function bootstrap() {
  app.mainView = new MainView
  // instantiate your view object and append it's HTML to the DOM.
  // attach your view object to the global app object so we have access to it anywhere. 
  $("body").append(app.mainView.el)  
}