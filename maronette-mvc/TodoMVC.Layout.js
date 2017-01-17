TodoMVC.module("Layout", function (Layout, App, Backbone, Marionette, $, _) {

	Layout.Header = Marionette.ItemView.extend({
		template: '#template-header',
		ui: {
			input: '#new-todo'
		},
		events: {
			'keypress #new-todo': 'onInputKeypress'
		},
		onInputKeypress: function(e) {
			var ENTER_KEY = 13;
			var todoText = this.ui.input.val().trim();

			if (e.which === ENTER_KEY && todoText) {
				this.collection.create({
					title: todoText
				});
				this.ui.input.val('');
			}
		}
	});

	Layout.Footer = Marionette.ItemView.extend({
		template: '#template-footer',
		ui: {
			count: '#todo-count strong',
			filters: '#filters a'
		},
		events: {
			'click #clear-completed': 'onClearClick'
		},
		initialize: function() {
			var count = this.collection.getActive().length;
			this.ui.count.html(count);

			if (count === 0) {
				this.$el.parent().hide();
			} else {
				this.$el.parent().show();
			}
		},
		updateFilterSelection: function(filter) {
			this.ui.filters
				.removeClass('selected')
				.filter('[href="#' + filter + '"]')
				.addClass('selected');
		},
		onClearClick: function () {
			var completed = this.collection.getCompleted();

			completed.forEach(function destroy(todo) {
				todo.destroy();
			});
		}
	});
});