document.addEventListener('DOMContentLoaded', function () {
    const categorySelector = document.getElementById('categorySelector');
    const imageGallery = document.getElementById('imageGallery');

    // Datos de ejemplo para cada categoría
    const imagesData = {
        '1': [
            { src: 'images/1-1.jpeg', label: 'Drawing' },
            { src: 'images/1-2.jpeg', label: 'Reading' },
            { src: 'images/1-3.jpeg', label: 'Playing' },
            { src: 'images/1-4.jpeg', label: 'Singing' },
            { src: 'images/1-5.jpeg', label: 'Dancing' },
            { src: 'images/1-6.jpeg', label: 'Running' },
            { src: 'images/1-7.jpeg', label: 'Jumping' },
            { src: 'images/1-8.jpeg', label: 'Swimming' },
            { src: 'images/1-9.jpeg', label: 'Painting' }
        ],
        '2': [
            { src: 'images/2-1.jpeg', label: 'Apple' },
            { src: 'images/2-2.jpeg', label: 'Fries' },
            { src: 'images/2-3.jpeg', label: 'Pizza' },
            { src: 'images/2-4.jpeg', label: 'Leaves' },
            { src: 'images/2-5.jpeg', label: 'Candy' },
            { src: 'images/2-6.jpeg', label: 'Chicken Nuggets' },
            { src: 'images/2-7.jpeg', label: 'Apple Juice' },
            { src: 'images/2-8.jpeg', label: 'Water' },
            { src: 'images/2-9.jpeg', label: 'Watermelon' }
        ],
        '3': [
            { src: 'images/3-1.jpeg', label: 'Happy' },
            { src: 'images/3-2.jpeg', label: 'Sad' },
            { src: 'images/3-3.jpeg', label: 'Angry' },
            { src: 'images/3-4.jpeg', label: 'Surprised' },
            { src: 'images/3-5.jpeg', label: 'Scared' },
            { src: 'images/3-6.jpeg', label: 'Excited' },
            { src: 'images/3-7.jpeg', label: 'Tired' },
            { src: 'images/3-8.jpeg', label: 'Bored' },
            { src: 'images/3-9.jpeg', label: 'Curious' }
        ]
    };

    // Función para cargar imágenes
    function loadImages(category) {
        imageGallery.innerHTML = ''; // Limpia la galería

        // Carga las imágenes para la categoría seleccionada
        imagesData[category].forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${item.src}" alt="${item.label}"><p>${item.label}</p>`;
            imageGallery.appendChild(div);
        });
    }

    // Evento para manejar cambios en el selector de categoría
    categorySelector.addEventListener('change', function () {
        loadImages(this.value);
    });

    // Carga inicial de imágenes
    loadImages(categorySelector.value);
});
