// Зависимости модулей.

var application_root = __dirname,

express = require( 'express' ), //Web framework

path = require( 'path' ), //Utilities for dealing with file paths

mongoose = require( 'mongoose' ); //MongoDB integration

// Создание сервера

var app = express();

// Конфигурирование сервера

app.configure( function() {

//разбор тела запроса и заполнение request.body

app.use( express.bodyParser() );

//проверка request.body на переопределение HTTP-методов

app.use( express.methodOverride() );

//поиск маршрута по URL и HTTP-методу

app.use( app.router );

//где сохранить статическое содержимое

app.use( express.static( path.join( application_root, 'site') ) );

//показать все ошибки в разработке

app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));

});

//запуск сервера

var port = 4711;

app.listen( port, function() {
	console.log( 'Express server listening on port %d in %s mode',

port, app.settings.env );

	// подключение к бд
	mongoose.connect('mongodb://localhost/library_database');

	var Book = new mongoose.Schema({
		title: String,
		author: String,
		releaseDate: Date
	});
	var BookModel = mongoose.model('Book', Book);

	// маршруты
	app.get('/api', function(request, response) {
		response.send('Library api is running');
	});
	app.get('/api/books', function(request, response) {
		return BookModel.find(function(err, books) {
			if (!err) {
				return response.send(books);
			} else {
				return console.log(err);
			}
		});
	});
	app.post('/api/books', function(request, response) {
		var book = new BookModel({
			title: request.body.title,
			author: request.body.author,
			releaseDate: request.body.releaseDate
		});

		book.save(function(err) {
			if (!err) {
				return console.log('created');
			} else {
				return console.log('error');
			}

			return response.send(book);
		});
	});
	//получение одной книги по id
	app.get( '/api/books/:id', function( request, response ) {
		return BookModel.findById( request.params.id, function( err, book ) {
			if( !err ) {
				return response.send( book );
			} else {
				return console.log( err );
			}
		});
	});

});