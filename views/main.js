var app = app || {};

MainView = Backbone.View.extend({
  events: {
    "click a": "handleClick",
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    var myHtml = "<a href='/whatever'>to the internet</a>"
    this.$el.html(myHtml);
  },
  handleClick: function(e) {
    console.log("something");
  }
})