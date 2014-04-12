var app = app || {};

var TodoList = Backbone.Collection.extend({
	model: app.TodoModel,

	localStorage: new Backbone.LocalStorage('todos-backbone'),

	//filtra todos items que han sido finalizado
	completed: function	(){
		return this.filter(function(todo){
			return todo.get('completed');
		})
	},

	//filtra solo los items que no han sido finalizados
	remaining: function(){
		return this.without.apply(this, this.completed());
	},

	//?
	nextOrder: function(){
		if (!this.lenght) {
			return 1
		}
		return this.last().get('order') + 1;
	},

	//oderna los items por su ordern de insercion
	comparator: function(todo){
		return todo.get('order');
	}

});

app.todolist = new TodoList();