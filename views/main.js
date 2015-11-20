// Create your view object here:
MainView = Backbone.View.extend({
	initialize : function() {
		this.render();
		this.handleClick();
	},
	render : function() {
		var html = '<a href="/whatever">to the internet</a>';
		this.$el.append(html);
		return this;
	},
	handleClick : function() {
		// if (true) {
		// 	console.log('something');
		// };
		$('a').click(function() {
			console.log('something');
		});
	}
});
//  * It should extend (inherit) from the main Backbone view object

//  * It should have a property called render:
//  * The render function should append the following HTML:
//  * <a href="/whatever">to the internet</a>

//  * It should have a property called handleClick which points to a function
//  * The handleClick function should get called when someone clicks on a link
//  * and then log the string "something" to the console
