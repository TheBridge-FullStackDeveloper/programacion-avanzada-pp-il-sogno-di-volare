// declaraciones

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
        var numRandom = Math.floor(Math.random() * (this.civilImages.length - 0) - 0);

        console.log(this.civilImages[numRandom]);
        return this.civilImages[numRandom];
    }

    getRandomMilitary() {
        var numRandom = Math.floor(Math.random() * (this.militaryImages.length - 0) - 0);

        console.log(this.militaryImages[numRandom]);
        return this.militaryImages[numRandom];
    }

    getAll() {
        console.log(this.civilImages.concat(this.militaryImages));
        return this.civilImages.concat(this.militaryImages);
    }
}

class Painter {
    constructor() {
        this.gallery = this.createGallery();
    }

    createGallery() {
        const newGallery = document.createElement("section");
        document.body.appendChild(newGallery);

        return newGallery;
    }

    createImageTag(imageUrl) {
        let picture = document.createElement("picture");
        let img = document.createElement("img");
        img.src = imageUrl;
        picture.appendChild(img);

        return picture;
    }

    paintSingleImage(imageUrl) {
        this.gallery.appendChild(this.createImageTag(imageUrl));
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(img => {
            this.paintSingleImage(img);
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();