
var UserItem = Backbone.Marionette.ItemView.extend({
    template: "#row-template",
    tagName: "tr"
});

// The grid view
var TableView = Backbone.Marionette.CompositeView.extend({
    tagName: "table",
    template: "#table-template",
    childView: UserItem,
    
    appendHtml: function(collectionView, itemView){
        console.log(itemView.el);
        collectionView.$("tbody").append(itemView.el);
    }
});



// ----------------------------------------------------------------
// Below this line is normal stuff... models, templates, data, etc.
// ----------------------------------------------------------------
var userData = [
    {
        username: "dbailey",
        fullname: "Derick Bailey"
    },
    {
        username: "jbob",
        fullname: "Joe Bob"
    },
    {
        username: "fbar",
        fullname: "Foo Bar"
    }
];
    

var User = Backbone.Model.extend({});

var UserCollection = Backbone.Collection.extend({
    model: User
});


var userCollection = new UserCollection();
userCollection.add(userData);

console.log("data: ", _.pluck(userData, "username"));
console.log("collection: ", userCollection.pluck("username"));

var tableView = new TableView({collection: userCollection});

var App = new Marionette.Application();

App.addRegions({
    region: '#region'
});

App.region.show(tableView);

App.start();