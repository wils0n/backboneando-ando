$(document).ready(function(){
	ItemModel = Backbone.Model.extend({
		urlRoot: "/api/v1/todo/",
	});

	ItemCollection = Backbone.Collection.extend({
		urlRoot: "/api/v1/todo/",
		model: ItemModel
	});

	itemCollection = new ItemCollection;

	ItemView = Backbone.View.extend({
		template: _.template($("#item-template").html()),
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	AppView = Backbone.View.extend({

		el: $("#main-content"),

		template: _.template($("#app-template").html()),

		events: {
			"keypress #new_todo" :  "createOnEnter",	
		},


		initialize: function (){
			
			this.input_title = this.$("#new_todo");
			itemCollection.on('add', this.addOne, this);
			//this.listenTo(itemCollection, 'add', this.addOne);
			itemCollection.on('reset', this.addAll, this);
			//this.listenTo(itemCollection, 'All', this.addAll);
			itemCollection.fetch();
		},

		render: function(){
			this.$el.html(this.template);
		},

		addOne: function (itemModel){
			var itemView = new ItemView({model: itemModel});
			$('#item-list').append(itemView.render().el);
		},

		addAll: function(){
			itemCollection.forEach(this.addOne, this);

		},
		createOnEnter: function(e) {
			console.log(this.input_title.val());
			
			var inp = $('#new_todo');
			console.log(inp.val())
			if (e.keyCode != 13) return;
			if (!inp.val()) return;

			var data = {
				title: inp.val(),
			};
			item = new ItemModel(data);
			item.save()
			this.addOne(item);
			inp.val('');
		}

	});

	appView = new AppView;
	var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
        },

        index: function(){
            appView.render();
        },
    });
        
    router = new Router;
    Backbone.history.start({pushState: true});
});