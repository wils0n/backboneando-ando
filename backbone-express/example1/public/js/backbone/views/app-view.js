Ninja.Views.App = Backbone.View.extend({
	events:{
		"click .create-problem": "showMyProblems",
		"click .new-problem": "showSetProblem",
		//"submit form": "createProblem"
		'mousedown .editable': 'editableClick'
	},
	initialize: function($el){
		this.$el = $el;
		_.bindAll(this, 'save');
		this.model.bind('save', this.model.save);
	},

    editableClick: etch.editableInit,

    save: function() {

        // normally you would call model.save() here but this is a demo
        alert('Saved! Not really, this is just a demo.');
    },
	showMyProblems: function(){
		this.$el.find('.my-problems-container').show()
	},
	showSetProblem: function(){
		this.$el.find('.set-problem-container').show()
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