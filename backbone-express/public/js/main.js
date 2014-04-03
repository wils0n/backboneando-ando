$(document).ready(function(){
	console.log('main.js loaded');
	window.collections.problems = new Ninja.Collections.Problems();
	window.collections.problems.on('add', function (model){
		console.log('se agrego un nuevo problema', model.toJSON());
		//aqui agregaremos una vista para cada uno de nuestros modelos
			var view = new Ninja.Views.Problem({model: model});
			view.render();
			view.$el.appendTo('.my-problems');
	});
	window.collections.problems.fetch();
});