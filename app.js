var app = {};
function bootstrap() {
  debugger
  var myView = new MainView
  app["mainView"] = myView 
  debugger
  $("body").append(myView.el)
  // instantiate your view object and append it's HTML to the DOM.
  // attach your view object to the global app object so we have access to it anywhere. 
}