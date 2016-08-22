var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

var todo1 = new Todo();
var todo1Attributes = todo1.toJSON();
console.log(todo1.get('title'));
console.log(todo1.get('completed'));
console.log(todo1Attributes);


var todo2 = new Todo({
	title: 'Retrieved with model',
	completed: true
});
var todo2Attributes = todo2.toJSON();
console.log(todo2.get('title'));
console.log(todo2.get('completed'));
console.log(todo2Attributes);

// Model.set()
console.log('/-------------/');
console.log('Model.set()');

var myTodo = new Todo({
	title: 'Set through init'
});
console.log(myTodo.get('title'));

myTodo.set('title', 'Set new title');
console.log(myTodo.get('title'));

myTodo.set({
	title: 'Second title',
	completed: true
})

console.log(myTodo.toJSON());

// Прямой доступ
console.log('/-------------/');
console.log('Прямой доступ');
var Person = new Backbone.Model();
Person.set({name: 'Jonh'}, {silent: true});

console.log(Person.hasChanged(0));
console.log(Person.hasChanged(''));

// Прослушивание изменений
console.log('/-------------/');
console.log('Прослушивание изменений');

var Todo1 = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	initialize: function() {
		console.log('initialize');
		this.on('change', function(){
			console.log('Value has changed');
		});

		this.on('change:title', function() {
			console.log('Title changed');
		});
	},
	setTitle: function(newTitle) {
		this.set({
			title: newTitle
		});
	}
});

var myTodo = new Todo1();

myTodo.set('title', 'The listener is triggered whenever an attribute value changes.');
myTodo.setTitle('Go fishing');

console.log('Title has changed: ' + myTodo.get('title'));

myTodo.set('completed', true);

console.log('Completed has changed: ' + myTodo.get('completed'));

myTodo.set({
	title: 'Changing more than one attribute at the same time only triggers the listener once.',
	completed: true
});

// Валидация
console.log('/-------------/');
console.log('Валидация');

var Person1 = new Backbone.Model({
	name: 'Jeremy'
});
Person1.validate = function(attrs) {
	if (!attrs.name) {
		console.log('I need name');
		return 'need name';
	}
};
Person1.set({name: 'Sam'});
console.log(Person1.get('name'));
Person1.unset('name', {validate: true});
console.log(Person1.get('name'));

var Todo = Backbone.Model.extend({
	defaults: {
		completed: false
	},
	validate: function(attrs) {
		if (attrs.title === undefined) {
			return 'Set title';
		}
	},
	initialize: function() {
		this.on('invalid', function(model, error) {
			console.log('invalid model');
			console.log(error);
		});
	}
});

var myTodo = new Todo();
myTodo.set({completed: true}, {validate: true});

console.log(myTodo.get('completed'));














