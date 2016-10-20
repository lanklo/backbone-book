var Workspace = Backbone.Router.extend({
	router: {
		'*filter': 'setFilter'
	},
	setFilter: function(param) {
		window.app.Todos.trigger('filter');
	}
});

app.TodoRouter = new Workspace();
Backbone.history.start();