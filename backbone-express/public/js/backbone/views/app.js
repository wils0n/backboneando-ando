Ninja.Views.App = Backbone.View.extend({
	events:{
		"click .new-problem": "showForm",
		"submit form": "createProblem"
	},
	initialize: function($el){
		this.$el = $el;
	},
	showForm: function(){
		this.$el.find('form').show()
	},
	createProblem: function(e){
		e.preventDefault();//evita que se envie la forma
		
		var titulo = $('input[name=title]').val();
		var descripcion = $('input[name=description]').val();
		var categoria = $('input[name=category]').val();

		var data = {
			"title": titulo,
			"description": descripcion,
			"category": categoria
		};

		var modelProblem = new Ninja.Models.Problem(data);
		modelProblem.save();
	}

});