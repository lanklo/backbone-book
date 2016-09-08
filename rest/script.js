var Todo = Backbone.Model.extend({
	default: {
		title: '',
		completed: false
	}
});

var TodoCollection = Backbone.Collection.extend({
	model: Todo,
	url: '/todo.php'
});

var todos = new TodoCollection();
todos.fetch();
console.log(todos);

todos.add({
	id: 2, "title": "test", "completed": true
})

todo2 = todos.get(2);
todo2.save();
todo2.destroy();

todos.create({title: 'Example'});

// Частичное сохранение с помощью PATCH
var model = new Backbone.Model();
model.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
model.save();
model.save({b: 2, d: 4}, {patch: true});
console.log(this.syncArgs.method);