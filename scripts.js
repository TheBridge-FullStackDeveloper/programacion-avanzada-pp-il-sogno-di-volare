class Painter {
    constructor() {
        this.createGallery()
    }

    createGallery() {
        const $gallery = document.createElement('section')
        const $body = document.querySelector('body')

        $body.appendChild($gallery)
        this.$gallery = $gallery
    }

    createImageTag(imageUrl) {
        const $picture = document.createElement('picture')
        const $img = document.createElement('img')

        $img.setAttribute('src', imageUrl)
        $picture.appendChild($img)

        return $picture
    }

    paintSingleImage(imageUrl) {
        const $imageTag = this.createImageTag(imageUrl)
        this.$gallery.append($imageTag)
    }

    paintMultipleImages(arrayOfImages) {
        for (const image of arrayOfImages) {
            const $imageTag = this.createImageTag(image)
            this.$gallery.append($imageTag)
        }
    }
}


const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg',
]

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg',
]

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg',
]

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg',
]

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages
        this.militaryImages = militaryImages
    }
    
    getRandomCivil() {
        return this.civilImages[Math.floor(Math.random() * this.civilImages.length)]
    }
    
    getRandomMilitary() {
        return this.militaryImages[Math.floor(Math.random() * this.civilImages.length)]
    }
    
    getAll() {
        const allImages = []
        for (const image of this.civilImages) {
            allImages.push(image)
        }
        for (const image of this.militaryImages) {
            allImages.push(image)
        }
        return allImages
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts)
const helicopters = new Gallery(civilHelicopters, militaryHelicopter)

console.log(aircrafts, helicopters)

const painter = new Painter()
// painter.paintSingleImage(aircrafts.getRandomCivil())
// painter.paintMultipleImages(helicopters.getAll())