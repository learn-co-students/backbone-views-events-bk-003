var app = {
  Model: {},
  View:{}
};

function bootstrap() {
  // instantiate your view object and append it's HTML to the DOM.
  // attach your view object to the global app object so we have access to it anywhere. 
  var aView = new MainView();
  app.mainView = aView;
  // debugger

  $("body").append(aView.el);
  return aView;

}