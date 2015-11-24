// Create your view object here:

//  * It should extend (inherit) from the main Backbone view object

//  * It should have a property called render:
//  * The render function should append the following HTML:
//  * <a href="/whatever">to the internet</a>

//  * It should have a property called handleClick which points to a function
//  * The handleClick function should get called when someone clicks on a link
//  * and then log the string "something" to the console
var MainView = Backbone.View.extend({
	events : {
		'click a': 'handleClick'
	}, 
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.append('<a href="/whatever">to the internet</a>');
		return this;
	},
	handleClick: function(){
		console.log('something');
	}
})