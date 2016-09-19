var TodoRouter = Backbone.Router.extend({
	/* определение таблицы маршрутов и функций для этого маршрутизатора*/
	routes: {
		"about" : "showAbout",
		/* Пример использования: http://example.com/#about */
		"todo/:id" : "getTodo",
		/* Это пример использования переменной ":param", которая позволяет
		сравнить любые компоненты между двумя слэшами URL */
		/* Пример использования: http://example.com/#todo/5 */
		"search/:query" : "searchTodos",
		/* Мы также можем определить несколько маршрутов,
		связанных с одной функцией отображения, в данном случае searchTodos().
		Обратите внимание, как ниже мы дополнительно передаем
		ссылку на номер страницы, если он указан */
		/* Пример использования: http://example.com/#search/job */
		"search/:query/p:page" : "searchTodos",
		/* Как мы видим, URL могут содержать столько элементов ":param",
		сколько мы захотим */
		/* Пример использования: http://example.com/#search/job/p1 */
		"todos/:id/download/*documentPath" : "downloadDocument",
		/* Это пример использования звездочки (*). Звездочки могут соответствовать
		любому числу URL-компонентов и комбинироваться с конструкциями ":param" */
		/* Пример использования: http://example.com/#todos/5/download/todos.doc */
		/* Если вы хотите использовать звездочки за пределами
		маршрутизации по умолчанию, то, скорее всего,
		будет правильно оставить их в конце URL;
		в противном случае у вас может возникнуть необходимость
		выполнить разбор регулярных выражений над вашим фрагментом */
		"*other" : "defaultRoute"
		/* Это маршрут по умолчанию, который также использует звездочку.
		Рассматривайте путь по умолчанию как шаблон для URL, которым
		не найдено соответствия или в которых пользователь совершил опечатку */
		/* Пример использования: http://example.com/# <anything> */,
		"optional(/:item)": "optionalItem",
		"named/optional/(y:z)": "namedOptionalItem"
		/* Маршрутизатор также поддерживает URL с необязательными фрагментами
		в скобках без необходимости использования регулярных выражений. */
	},

	showAbout: function(){

	},

	getTodo: function(id){
		/*
		Обратите внимание на то, что id, найденный в приведенном выше пути,
		будет передан в эту функцию */
		console.log("You are trying to reach todo " + id);
	},
	searchTodos: function(query, page){
		var page_number = page || 1;
		console.log("Page number: " + page_number + " of the results for todos containing the word: " + query);
	},
	downloadDocument: function(id, path){

	},
	defaultRoute: function(other){
		console.log('Invalid. You attempted to reach:' + other);
	}
	});

/* Теперь, когда мы настроили маршрутизатор, нам нужно создать его экземпляр */
// var myTodoRouter = new TodoRouter();
// Backbone.history.start();


var TodoRouter1 = Backbone.Router.extend({
	'routes': {
		'todo/:id': 'viewTodo',
		'todo/:id/edit': 'editTodo'
	},
	viewTodo: function(id) {
		console.log('View todo request');
		this.navigate("todo/" + id + '/edit');
	},
	editTodo: function(id) {
		console.log('Edit todo opened');
	}
});
var myTodoRouter1 = new TodoRouter1();
Backbone.history.start();

// Backbone.history.on('route', onRoute);
// // генерация события 'route' на экземпляре маршрутизатора

// TodoRouter1.on('route', function(name, args) {
// 	console.log(name === 'routeEvent');
// });
// location.replace('http://127.0.0.1:8080#route-event/x');
// Backbone.history.checkUrl();






