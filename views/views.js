var TodoView = Backbone.View.extend({
	tagName: 'li',
	todoTpl: _.template("An example"),
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},
	render: function() {
		this.$el.html(this.todoTpl(this.model.toJSON()));
		this.input = this.$('.edit');
		return this;
	},
	edit: function() {

	},
	close: function() {

	},
	updateOnEnter: function(e) {

	}
});

var todoView = new TodoView();
console.log(todoView.el);

// setElement
console.log('/-------------/');
console.log('setElement');

var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
	events: {
		'click': function(e) {
			console.log(view.el === e.target);
		}
	}
});
var view = new View({
	el: button1
})

view.setElement(button2);
button1.trigger('click');
button2.trigger('click');

