var TodoMVC = new Marionette.Application();

TodoMVC.addRegions({
	header: '#header',
	footer: '#footer',
	main: '#main'
});

TodoMVC.on('initialize:after', function() {
	Backbone.history.start();
});