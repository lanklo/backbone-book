var TodoRouter = Backbone.Router.extend({
	routes: {
		'about': 'showAbout',
		'todo/:id': 'getTodo',
		'search/:query': 'searchTodos',
		'search/:query/p:page': 'searchTodos',
		'todos/:id/download/*downloadPath': 'downloadDocument',
		'*other': 'defaultRoute',
		'optional(/:item)': 'optionalItem',
		'named/optional/(y:z)': 'namedOptiomalItem'
	},
	showAbout: function() {

	},
	getTodo: function(id) {
		console.log("You are trying to reach todo " + id);
	},
	searchTodos: function(query, page) {
		var pageNumber = page || 1;
		console.log("Page number: " + page_number + " of the results for todos containing the word: " + query);
	},
	downloadDocument: function(id, path) {

	},
	defaultRoute: function(other) {
		console.log('Invalid. You attempted to reach:' + other);
	}
});

var myTodoRouter = new TodoRouter();