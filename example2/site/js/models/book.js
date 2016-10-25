var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: '/img/placeholder',
		title: 'No title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	},
	url: '/api/books',
	parse: function(response) {
		response.id = response._id;
		return response;
	}
});

