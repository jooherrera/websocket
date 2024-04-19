const socket = io();
const form = document.getElementById('bookForm');
const cardContainer = document.querySelector('.card-container');

form.addEventListener('submit', function (event) {
	event.preventDefault(); // Previene el comportamiento por defecto de envío del formulario

	// Construir un objeto con los datos del formulario
	const formData = {
		title: form.elements['title'].value,
		pages: form.elements['pages'].value,
		author: form.elements['author'].value,
	};

	// Opciones de la solicitud fetch
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData), // Convertir los datos del formulario a JSON
	};

	// Enviar los datos al servidor
	fetch('http://localhost:8080/api/books', options)
		.then((response) => response.json())
		.then((data) => {
			if (!data.success) {
				alert(data.message);
				return;
			}

			alert('Libro registrado con éxito!');
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('Error al registrar el libro');
		});
});

socket.on('new-product', (book) => {
	const newCard = `
				<div class="card">
					<h3>${book.title}</h3>
					<p>Autor: ${book.author}</p>
					<p>Páginas: ${book.pages}</p>
				</div>`;

	cardContainer.innerHTML += newCard;
});
