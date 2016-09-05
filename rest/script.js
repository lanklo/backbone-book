var Todo = Backbone.Model.extend({
	default: {
		title: '',
		completed: false
	}
});

var TodoCollection = Backbone.Collection.extend({
	model: Todo,
	url: 'todos'
});

var todos = new TodoCollection();
todos.fetch();

var todo2 = todos.get(2);
todo2.save();
todo2.destroy();

todos.create({title: 'Example'});

// Частичное сохранение с помощью PATCH
