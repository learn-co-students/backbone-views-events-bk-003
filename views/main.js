var MainView = Backbone.View.extend({
  
  events: {
  'click a': "handleclick"
  },
  
  initialize: function() {
    this.render();
  }, 
  
  render: function() {
    this.$el.append('<a href="/whatever">to the internet</a>');
    return this;
  },
  
  handleClick: function(){
			console.log('something');
  }
});
