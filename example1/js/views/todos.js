var app = app || {};

app.TodoView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#item-template').html()),
	events: {
		'dblclick label': 'edit',
		'click .toggle': 'togglecompleted',
		'click .destroy': 'clear',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'visible', this.toggleVisible);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.toggleClass( 'completed', this.model.get('completed') );
		this.toggleVisible();
		this.$input = this.$('.edit');
		return this;
	},
	toggleVisible: function() {
		this.$el.toggleClass('hidden', this.isHidden());
	},
	isHidden : function () {
		var isCompleted = this.model.get('completed');

		return ( // только для скрытых
			(!isCompleted && app.TodoFilter === 'completed')
			|| (isCompleted && app.TodoFilter === 'active')
		);

	},
	// НОВОЕ: переключает состояние completed модели.
	togglecompleted: function() {
		this.model.toggle();
	},
	edit: function() {
		this.$el.addClass('editing');
		this.$input.focus();
	},
	close: function() {
		var value = this.$input.val().trim();
		if (value) {
			this.model.save({ title: value });
		}
		this.$el.removeClass('editing');
	},
	updateOnEnter: function(e) {
		if (e.witch === ENTER_KEY) {
			this.close();
		}
	},
	togglecompleted: function() {
		this.model.toggle();
	},
	clear: function() {
		this.model.destroy();
	}
});