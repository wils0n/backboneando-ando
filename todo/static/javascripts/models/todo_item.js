window.TodoItem = Backbone.Model.extend({
  url: '/todos/',

	defaults: {
		description: 'Empty todo...',
		status: 'incomplete'
	},
  toggleStatus: function(){
    if(this.get('status') == 'incomplete'){
      this.set({'status': 'complete'});
    }else{
      this.set({'status': 'incomplete'});
    }

    this.save();
  }
});
