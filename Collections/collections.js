// Прослушивание событий

var TodosCollection = new Backbone.Collection();

TodosCollection.on('change:title', function(model) {
	console.log("Changed my mind! I should " + model.get('title'));
});


TodosCollection.on('add', function(todo) {
	console.log("I should " + todo.get("title") + ". Have I done it before? " 
+ (todo.get("completed") ? 'Yeah!': 'No.' ));
});

TodosCollection.add([
	{ title: 'First task', completed: false, id: 1},
	{ title: 'Second task', completed: true, id: 12}
]);

var todo = TodosCollection.get(1);
todo.set('title', 'Go fishing');

// ==================
var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});
var myTodo = new Todo;
myTodo.set({
	title: 'Buy some books', completed: true
});
myTodo.on({
	'change:title': titleChanged,
	'change:state': stateChanged
});

function titleChanged() {
	console.log('title changed');
}

function stateChanged() {
	console.log('state changed');
}

myTodo.set({title: 'get gross'});

// ==================

var TodoCounter = {
	counterA: 0,
	counterB: 0
};
_.extend(TodoCounter, Backbone.Events);

var incrA = function() {
	TodoCounter.counterA += 1;
	TodoCounter.trigger('event');
};
var incrB = function() {
	TodoCounter.counterB += 1;
};

TodoCounter.once('event', incrA);
TodoCounter.once('event', incrB);

TodoCounter.trigger('event');

console.log(TodoCounter.counterA === 1);
console.log(TodoCounter.counterB === 1);


// Перезапись и обновление коллекций
console.log("Перезапись и обновление коллекций");
var TodosCollection = new Backbone.Collection();
TodosCollection.add([
	{ id: 1, title: 'go to Jamaica.', completed: false },
	{ id: 2, title: 'go to China.', completed: false },
	{ id: 3, title: 'go to Disneyland.', completed: true }
]);

TodosCollection.on('add', function(model) {
	console.log('Added ' + (model.get('title')));
});

TodosCollection.on('remove', function(model) {
	console.log('Removed ' + (model.get('title')));
});

TodosCollection.on('change:completed', function(model) {
	console.log('Completed ' + model.get('title'));
});

TodosCollection.on('reset', function() {
	console.log('Collection reseted');
});

TodosCollection.set([
	{ id: 1, title: 'go to Jamaica.', completed: true },
	{ id: 2, title: 'go to China.', completed: false },	
	{ id: 4, title: 'go to Disney World.', completed: false}
]);

TodosCollection.reset([
	{ title: 'go to Cuba.', completed: false }
]);

console.log('Collection size: ' + TodosCollection.length); // Collection size:
TodosCollection.reset();
console.log('Collection size: ' + TodosCollection.length); // Collection size:

// ==================
var Todo = new Backbone.Model();
var Todos = new Backbone.Collection([Todo])
	.on('reset', function(Todos, options) {
		console.log(options.previousModels);
		console.log([Todo]);
		console.log(options.previousModels[0] === Todo);
	});

Todos.reset([]);

// ===================
// var theBeatles = new Backbone.Collection(['john', 'paul', 'george', 'ringo']);
// theBeatles.update(['john', 'paul', 'george', 'pete']);

// API цепочек команд

var collection = new Backbone.Collection([
	{ name: 'Tim', age: 5 },
	{ name: 'Ida', age: 26 },
	{ name: 'Rob', age: 55 }
]);

var name = collection.chain()
	.filter(function(item) { return item.get('age') > 10; })
	.map(function(item) { return item.get('name'); })
	.value();

console.log(name);

// var collection2 = new Backbone.Collection();
// collection2.chain()
// 	.add({ name: 'John', age: 23 })
// 	.add({ name: 'Harry', age: 33 })
// 	.add({ name: 'Steve', age: 41 });

// var names2 = collection2.pluck('name');
// console.log(names2);






