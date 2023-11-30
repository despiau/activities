document.addEventListener('DOMContentLoaded', function () {
    const categorySelector = document.getElementById('categorySelector');
    const imageGallery = document.getElementById('imageGallery');
    const fixedBar = document.querySelector('.fixed-bar');

    // Images for each category
    const imagesData = {
        '1': [
            { src: 'images/1-1.jpg', label: 'Drawing' },
            { src: 'images/1-2.jpg', label: 'Reading' },
            { src: 'images/1-3.jpg', label: 'Playing' },
            { src: 'images/1-4.jpg', label: 'Singing' },
            { src: 'images/1-5.jpg', label: 'Dancing' },
            { src: 'images/1-6.jpg', label: 'Running' },
            { src: 'images/1-7.jpg', label: 'Sleeping' },
            { src: 'images/1-8.jpg', label: 'Eating' },
            { src: 'images/1-9.jpg', label: 'Painting' }
        ],
        '2': [
            { src: 'images/2-1.jpg', label: 'Apple' },
            { src: 'images/2-2.jpg', label: 'Fries' },
            { src: 'images/2-3.jpg', label: 'Pizza' },
            { src: 'images/2-4.jpg', label: 'Leaves' },
            { src: 'images/2-5.jpg', label: 'Candy' },
            { src: 'images/2-6.jpg', label: 'Crackers' },
            { src: 'images/2-7.jpg', label: 'Apple Juice' },
            { src: 'images/2-8.jpg', label: 'Water' },
            { src: 'images/2-9.jpg', label: 'Watermelon' }
        ],
        '3': [
            { src: 'images/3-1.jpg', label: 'Happy' },
            { src: 'images/3-2.jpg', label: 'Sad' },
            { src: 'images/3-3.jpg', label: 'Angry' },
            { src: 'images/3-4.jpg', label: 'Surprised' },
            { src: 'images/3-5.jpg', label: 'Scared' },
            { src: 'images/3-6.jpg', label: 'Excited' },
            { src: 'images/3-7.jpg', label: 'Tired' },
            { src: 'images/3-8.jpg', label: 'Bored' },
            { src: 'images/3-9.jpg', label: 'Curious' }
        ]
    };

    // Function to load images based on the selected category
    function loadImages(category) {
        imageGallery.innerHTML = ''; // Clear gallery

        imagesData[category].forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${item.src}" alt="${item.label}"><p>${item.label}</p>`;
            div.addEventListener('click', function() {
                fixedBar.textContent = `Selected: ${item.label}`;
            });
            imageGallery.appendChild(div);
        });
    }

    // Event listener for category selection
    categorySelector.addEventListener('change', function () {
        loadImages(this.value);
    });

    // Initial load of images
    loadImages(categorySelector.value);
});
