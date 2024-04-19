//Manager para manegar los libros.. en este caso
//esta implementado en memoria.
export class BookManager {
	#books;

	constructor() {
		this.#books = [
			{ id: 'V1StGXR8_Z5', title: 'Cien años de soledad', pages: 417, author: 'Gabriel García Márquez' },
			{ id: 'WJz8uM-Gks', title: '1984', pages: 328, author: 'George Orwell' },
			{ id: 'JdHi6B-m2T', title: 'El señor de los anillos', pages: 1216, author: 'J.R.R. Tolkien' },
			{ id: 'XpLoY23_Tg3', title: 'El principito', pages: 96, author: 'Antoine de Saint-Exupéry' },
			{ id: 'm9dcLS8_9Te', title: 'Matar a un ruiseñor', pages: 384, author: 'Harper Lee' },
			{ id: 'wpdUaFV_sk4', title: 'Orgullo y prejuicio', pages: 432, author: 'Jane Austen' },
		];
	}

	add(book) {
		this.#books.push(book);
	}

	getBooks() {
		return this.#books;
	}
}
