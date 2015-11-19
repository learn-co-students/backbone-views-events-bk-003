// Create your view object here:

//  * It should extend (inherit) from the main Backbone view object

//  * It should have a property called render:
//  * The render function should append the following HTML:
//  * <a href="/whatever">to the internet</a>

//  * It should have a property called handleClick which points to a function
//  * The handleClick function should get called when someone clicks on a link
//  * and then log the string "something" to the console


var MainView = Backbone.View.extend({

  // tagName: "div",

  // className: "document-row",

  events: {
    "click": "handleClick"
  },

  initialize: function() {
    // this.listenTo(this.model, "change", this.render);
    this.render();
  },

  render: function() {
  	var html = '<a href="/whatever">to the internet</a>';
  	this.$el.html(html);
  },

  handleClick: function() {
  	console.log("something");
  }

});