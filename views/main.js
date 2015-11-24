// Create your view object here:
var MainView = Backbone.View.extend({
  events: {
    "click a": "handleClick" //"click #link1"
  },
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.append('<a href="/whatever">to the internet</a>') // id="link1" as id tag for click event
  },
  handleClick: function (){
   
    console.log("something");
  }
});x

//  * It should extend (inherit) from the main Backbone view object

//  * It should have a property called render:
//  * The render function should append the following HTML:
//  * <a href="/whatever">to the internet</a>

//  * It should have a property called handleClick which points to a function
//  * The handleClick function should get called when someone clicks on a link
//  * and then log the string "something" to the console
