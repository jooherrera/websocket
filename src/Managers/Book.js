import { nanoid } from 'nanoid';

//Clase para crear un libro
export class Book {
	#id;
	#title;
	#author;
	#pages;
	constructor(info) {
		this.#id = nanoid();
		this.#author = this.#validateAuthor(info.author);
		this.#title = this.#validateTitle(info.title);
		this.#pages = this.#validatePages(info.pages);
	}

	#validateAuthor(author) {
		if (!author) {
			throw new Error('El autor es un campo requerido');
		}
		return author;
	}

	#validateTitle(title) {
		if (!title) {
			throw new Error('El titulo es un campo requerido');
		}
		return title;
	}

	#validatePages(pages) {
		if (!pages || pages === 0) {
			throw new Error('La cantida de páginas es un campo requerido');
		}

		if (pages < 0) {
			throw new Error('Cantida de páginas no válido: ', pages);
		}
		return pages;
	}

	toJSON() {
		return {
			id: this.#id,
			title: this.#title,
			author: this.#author,
			pages: this.#pages,
		};
	}
}
