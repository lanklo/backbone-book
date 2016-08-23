var ListView = Backbone.View.extend({
	initialize: function() {
		this.model.bind('change', _.bind(this.render, this));
	},
	render: function() {
		var items = this.model.get('items');

		_.each(items, function(item) {
			var itemView = new ItemView({
				model: item
			});

			this.$el.append(itemView.render().el);
		}, this);


		this.$el.html(this.model.toJSON());
	}
});

var ItemView = Backbone.View.extend({
	events: {},
	render: function() {
		this.$el.html(this.model.toJSON());
		return this;
	}
});

// Collections
var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

var TodosCollection = Backbone.Collection.extend({
	model: Todo
});
var myTodo = new Todo({ title: 'test 1'});
var a = new Todo({ title: 'test a'});
var b = new Todo({ title: 'test b'});
var c = new Todo({ title: 'test c'});

var myTodos = new TodosCollection([b, a]);

console.log(myTodos.length);

myTodos.add(c);
console.log(myTodos.length);

myTodos.remove([a, b]);
console.log(myTodos.length);

myTodos.remove(c);
console.log(myTodos.length);

var items = new Backbone.Collection;
items.add([{ id: 1, name: 'Jonh'}, {id: 2, name: 'Ivan'}]);
items.add([{ id: 1, name: 'Changed'}], {merge: true});

console.log(JSON.stringify(items.toJSON()));

// Считывание моделей
var myTodo = new Todo({title: 'Read the whole book', id: 2});

var todos = new TodosCollection([myTodo]);
var todo2 = todos.get(2);

console.log(todo2 === myTodo);



