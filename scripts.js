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
    }
    getRandomCivil() {
        let aleatorio = Math.floor(Math.random()*this.civilImages.length)
        return this.civilImages[aleatorio]
    }
    
    getRandomMilitary() {
        let aleatorio = Math.floor(Math.random()*this.militaryImages.length);
        return this.militaryImages[aleatorio]
    }
    
    getAll() {
        return [...this.civilImages,...this.militaryImages]
    }
}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        this.gallery = document.createElement("section");
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        const picture = document.createElement("section");
        let image = `<picture>
            <img src=${imageUrl} />
        </picture>`
        picture.innerHTML = image;
        return picture.firstChild;
    }

    paintSingleImage(imageUrl) {
        this.createGallery();
        this.gallery.appendChild(this.createImageTag(imageUrl));
    }

    paintMultipleImages(arrayOfImages) {
        this.createGallery();
        arrayOfImages.forEach(imageUrl => {
            this.gallery.appendChild(this.createImageTag(imageUrl));
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);

const painter = new Painter();