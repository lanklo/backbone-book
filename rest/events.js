Backbone.on('event', function() {
	console.log('Handeled Backbone event');
})

// on(), off() и trigger()
var ourObject = {};
// mixin
_.extend(ourObject, Backbone.Events);
// Добавление события
ourObject.on('dance', function(msg) {
	console.log('We triggered ' + msg);
});
ourObject.trigger('dance', 'our event');

//=============
console.log('=============');

var ourObject1 = {};
_.extend(ourObject1, Backbone.Events);

function dancing(msg) {
	console.log('We triggered ' + msg);
}

ourObject1.on('dance:tap', dancing);
ourObject1.on('dance:break', dancing);

ourObject1.on('all', function(eventName) {
	console.log('We started event ' + eventName);
});

ourObject1.trigger('dance:tap', 'tap dancing');
ourObject1.trigger('dance:break', 'break dancing');
ourObject1.trigger('dance', 'just dancing');

ourObject1.off('dance:tap');

console.log('=============');

ourObject1.trigger('dance:tap', 'tap dancing');
ourObject1.trigger('dance:break', 'break dancing');

console.log('=============');

var ourObject2 = {};
_.extend(ourObject2, Backbone.Events);

function dancing(msg) {
	console.log('We are dancing ' + msg);
}
function jumping(msg) {
	console.log('We are jumping ' + msg);
}

ourObject2.on('move', dancing);
ourObject2.on('move', jumping);
ourObject2.trigger('move', 'Yeah!');

ourObject2.off('move', dancing);

ourObject2.trigger('move', 'Jump');

console.log('========');

var ourObject = {};

// примесь

_.extend(ourObject, Backbone.Events);

function doAction (msg) { console.log("We are " + msg); }

// добавление слушателей событий

ourObject.on("dance", doAction);
ourObject.on("jump", doAction);
ourObject.on("skip", doAction);

// единственное событие

ourObject.trigger("dance", 'just dancing.');

// несколько событий

ourObject.trigger("dance jump skip", 'very tired from so much action.');

console.log('========');
var ourObject3 = {};
_.extend(ourObject3, Backbone.Events);

function doAction(msg, duration) {
	console.log('We are ' + msg + ' for ' + duration);
}

ourObject3.on('jump', doAction);
ourObject3.on('dance', doAction);
ourObject3.on('skip', doAction);

ourObject3.trigger('dance', 'dancing', '15 min');
ourObject3.trigger('dance jump skip', 'on fire', '5 min');

// listen and stopListening
console.log('========');
var a = _.extend({}, Backbone.Events);
var b = _.extend({}, Backbone.Events);
var c = _.extend({}, Backbone.Events);

a.listenTo(b, 'anything', function(event) {
	console.log('anything happened');
});
a.listenTo(c, 'everything', function(event) {
	console.log('everything happened');
});
b.trigger('anything');
a.stopListening();
b.trigger('anything');
c.trigger('everything');

console.log('========');
var view = new Backbone.View();
var b = _.extend({}, Backbone.Events);
view.listenTo(b, 'all', function() {
	console.log(true);
});
b.trigger('any');
view.listenTo(b, 'all', function() {
	console.log(false);
});
view.remove();
b.trigger('any');

console.log('========');
// События и представления
console.log('События и представления');

var todoView = Backbone.View.extend({
	el: '#todo',
	events: {
		'click [type="checkbox"]': 'clicked'
	},
	initialize: function() {
		this.$el.click(this.jqueryClicked);

		this.on('apiEvent', this.callback);
	},
	clicked: function(event) {
		console.log('event handeled for ' + this.el.outerHTML);
		this.trigger('apiEvent', event.type);
	},
	jqueryClicked: function(event) {
		console.log('event handeled for ' + this.outerHTML);
	},
	callback: function(eventType) {
		console.log('event type was ' + eventType);
	}
});

var todo1 = new todoView();


