import express from 'express';
import { viewsRouter } from './routes/views.router.js';
import { handlebarsConf } from './config/handlebars.config.js';
import { bookRouter } from './routes/books.router.js';
import { socketConf } from './config/socket.config.js';

const app = express();

//Configuracion basica
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Crear el servidor para darselo a socket.io
const httpServer = app.listen(8080, () => console.log('Server ON: 8080'));

//Configuración de handlebars
handlebarsConf(app);

//configuracion de socket.io
const io = socketConf(httpServer);

//Middleware para pasar el socket y que los endpoints puedan usarlo
app.use((req, res, next) => {
	req.io = io;
	next();
});

//Rutas
app.use('/', viewsRouter);
app.use('/api/books', bookRouter);
