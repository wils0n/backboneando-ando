Ninja.Views.Problem = Backbone.View.extend({
	events: {

	},
	//tagName: 'ul',
	initialize: function (){
		console.log(this.$el);
		this.template = _.template($('#problem-template').html() );
	},
	render: function (){
		var data = this.model.toJSON();
		var html = this.template(data);
		this.$el.html(html);
	}	
});