window.AppView = Backbone.View.extend({

  events: {
    'keypress #new-todo': 'createOnEnter',

  },
  
  initialize: function(params){ 
    this.$el = params.el;
    this.$input = this.$('#new-todo');
  },

  createOnEnter: function(e){
    console.log(e.which);
    console.log(this.$input.val().trim());
    if ( e.which !== 13 || !this.$input.val().trim() ) {
      return;
    }
    var data = {
      "description": this.$input.val(),
      "status": false
    };

    var modelProblem = new TodoItem(data);
    modelProblem.save();
  }

  

});

