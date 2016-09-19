var id_counter = 1;
Backbone.sync = function(method, model, options) {
	console.log("I've been passed " + method + " with " + JSON.stringify(model));
	if(method === 'create'){ model.set('id', id_counter++); }
};

// myApi
Backbone.sync = function(method, model, options) {
	function success(result) {
		if (options.success) {
			options.success(result);
		}
	}
	function error(result) {
		if (options.error) {
			options.error(result);
		}
	}
	options || (options = {});

	switch(method) {
		case 'create':
			return MyAPI.create(model, success, error);
		case 'update':
			return MyAPI.update(model, success, error);
		case 'patch':
			return MyAPI.patch(model, success, error);
		case 'delete':
			return MyAPI.destroy(model, success, error);
		case 'read':
			if (model.attributes[model.idAttribute]) {
				return MyAPI.find(model, success, error);
			} else {
				return MyAPI.findAll(model, success, error);
			}
	}
}

var Library = Backbone.Collection.extend({
	url: '/library.php'
});

var attrs = {
	title: 'The Tempest',
	author: 'Bill Shakespeare',
	length: 123
};

var library = new Library;

library.create(attrs, { wait: false });

library.first().save({
	id: 2,
	author: 'Tim Shakespeare'
}, {
	emulateHTTP: true
});

// console.log(this.ajaxSettings.url === '/library/2');
// console.log(this.ajaxSettings.type === 'POST');
// console.log(this.ajaxSettings.contentType === 'application/json');

// var data = JSON.parse(this.ajaxSettings.data);
// console.log(data);


