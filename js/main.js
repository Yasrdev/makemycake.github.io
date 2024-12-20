// script.js
const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

// Fonction pour passer au prochain groupe de 4 images
function nextSlide() {
    currentIndex += 4; // Passer 4 images à chaque fois
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Revenir au début
    }
    slides.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Activer le slider toutes les 4 secondes
setInterval(nextSlide, 3500);
