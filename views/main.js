// Create your view object here:
var MainView = Backbone.View.extend({
  events: {
    "click a": "handleClick" //"click #link1"   events listener click is handed the handleClick function below
  },
  initialize: function(){  //initialize....
    this.render();
  },
  render: function(){  //render....appends href to page, page says whatever. the a tag in the html is given to the click event defined as 'a' on line 4 (id)
    this.$el.append('<a href="/whatever">to the internet</a>') // if multiple a is used, can be given an id="link1" as id tag for click event 
  },
  handleClick: function (){ // just a function that handles the click event....'on click, does this'
   console.log("something");
  }
});

//  * It should extend (inherit) from the main Backbone view object

//  * It should have a property called render:
//  * The render function should append the following HTML:
//  * <a href="/whatever">to the internet</a>

//  * It should have a property called handleClick which points to a function
//  * The handleClick function should get called when someone clicks on a link
//  * and then log the string "something" to the console
