import { Router } from 'express';

export const viewsRouter = Router();

//Endpoint para la vista de home
viewsRouter.get('/', async (req, res) => {
	//Pedimos a nuestro propio servidor los libros.
	const response = await fetch('http://localhost:8080/api/books');

	//El endpoint responde
	const data = await response.json();

	//Mandamos el handlebars con informacion
	res.render('home', {
		books: data.payload,
	});
});
