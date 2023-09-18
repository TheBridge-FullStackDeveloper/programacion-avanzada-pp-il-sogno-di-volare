const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    };
    
    getRandomCivil() {
        return (`assets/avion-civil-${Math.floor(Math.random()*(6-1)+1)}.jpg`);
    };
    
    getRandomMilitary() {
        return (`assets/avion-militar-${Math.floor(Math.random()*(6-1)+1)}.jpg`);
    };
    
    getAll() {
        return [...this.civilImages, ...this.militaryImages];
    };
};

class Painter {
    constructor(gallery) {
        this.gallery = gallery;
        this.createGallery();
    };

    createGallery() {
        let gallerySection = document.createElement('section');
        gallerySection.setAttribute('id', 'gallery');
        document.body.appendChild(gallerySection);
    };

    createImageTag(imageUrl) {
        let picture = document.createElement('picture')
        let img = document.createElement('img');
        img.setAttribute('src', imageUrl);
        picture.appendChild(img);
        document.getElementById('gallery').appendChild(picture);
    };

    paintSingleImage(imageUrl) {
        document.getElementById('gallery').innerHTML = '';
        this.createImageTag(imageUrl);
    };

    paintMultipleImages(arrayOfImages) {
        document.getElementById('gallery').innerHTML = '';
        for(let i=0; i<arrayOfImages.length; i++) {
            this.createImageTag(arrayOfImages[i]);  
        };
    };
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();