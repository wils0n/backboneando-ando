var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#todoapp',
	
	statsTemplete: _.template($('#stats-template').html()),

	initialize: function(){
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		this.listenTo(app.Todos, 'add', this.addOne);
		this.listenTo(app.Todos, 'reset', this.addAll);
	},

	//agrega un solo item a la lista creando una vista para este y 
	//agrega este al elemento <ul>
	addOne: function(todo){
		var view = new app.TodoView({ model: todo});
		$('#todo-list').append(view.render().el);
	},

	addAll: function(){
		this.$('#todo-list').html('');
		app.Todos.each(this.addOne, this);
	},

});