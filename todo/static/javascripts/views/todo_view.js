window.TodoView = Backbone.View.extend({

  events: {
    'change input': 'toggleStatus',

  },

  //template: _.template( $('#item-template').html()),
  template: _.template('<h3 class="<%= status %>"><input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/> <%= description %> <a href="/#todos/1">☞</a></h3>'),
  

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy hide', this.remove, this);

  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function(){
    this.$el.remove();
  },

  toggleStatus: function(){
    this.model.toggleStatus()
  },


});

