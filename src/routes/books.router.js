import { Router } from 'express';
import { BookManager } from '../Managers/BookManager.js';
import { Book } from '../Managers/Book.js';

export const bookRouter = Router();

//Manager
const bookManager = new BookManager();

//Endpoint para agregar un libro
bookRouter.post('/', (req, res) => {
	try {
		//Crea un libro
		const book = new Book(req.body);

		//El Manager lo agrega
		bookManager.add(book);

		//Avisamos por socket que se agrego un libro
		req.io.emit('new-product', book);

		//Respondemos al que nos pidio agregar
		res.json({ success: true, payload: book, message: 'Libro agregado' });
	} catch (error) {
		//Si hay un error respondemos con un mensaje
		res.status(404).json({ success: false, payload: null, message: 'No se pudo agregar el libro' });
	}
});

//Endpoint para obtener los libros
bookRouter.get('/', (req, res) => {
	try {
		//Le pedimos al Manager los libros
		const books = bookManager.getBooks();
		//Respondemos con los libros
		res.json({ success: true, payload: books, message: 'Libros obtenidos' });
	} catch (error) {
		res.json({ success: false, payload: null, message: 'No se pudo obtener los libros' });
	}
});
