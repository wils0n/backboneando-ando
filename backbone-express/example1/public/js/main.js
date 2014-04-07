$(document).ready(function(){
	console.log('main.js loaded');
	
	var modelProblem = new Ninja.Models.Problem();
	window.views.app = new Ninja.Views.App({model: modelProblem, el: $('body')});

	window.ponyExpress = new PonyExpress({
		io: window.location.origin
	});

	window.ponyExpress.bind('connect', function(){
		window.plugs.problem = new PonyExpress.BackbonePlug({
			collection: window.collections.problems
		});
	});

	window.collections.problems = new Ninja.Collections.Problems();
	window.collections.problems.on('add', function (model){
			var view = new Ninja.Views.Problem({model: model});
			view.render();
			//view.$el.appendTo('.my-problems');
			view.$el.prependTo('.my-problems');
	});
	window.collections.problems.fetch();
});