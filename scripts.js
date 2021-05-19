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
		this.civilImages = civilImages
		this.militaryImages = militaryImages
	}
	
	random(max) {
		return ~~(Math.random() * max)
	}

	getRandomCivil() {
		return this.civilImages[this.random(this.civilImages.length)]
	}
	
	getRandomMilitary() {
		return this.militaryImages[this.random(this.militaryImages.length)]
	}
	
	getAll() {
		return this.militaryImages.concat(this.civilImages)
	}
}

class Painter {
	constructor() {
		this.gallery = this.createGallery()
	}

	createGallery() {
		const section = document.createElement('section')
		document.body.prepend(section)
		return section
	}

	createImageTag(imageUrl) {
		return `<picture><img src="${imageUrl}" /></picture>`
	}

	paintSingleImage(imageUrl) {
		this.gallery.innerHTML = this.createImageTag(imageUrl)
	}

	paintMultipleImages(arrayOfImages) {
		this.gallery.innerHTML = arrayOfImages.map(function(imgUrl) {
			return this.createImageTag(imgUrl)
		}.bind(this))
	}
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();