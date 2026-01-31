const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let currentIndex = 0;
let autoPlayInterval;

// Auto-play carousel
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 4000); // Change slide every 4 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
}

if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay(); // Restart auto-play after manual interaction
    });
}

if (carouselNext) {
    carouselNext.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });
}

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

// Start auto-play when carousel is visible
if (carouselInner) {
    startAutoPlay();
    
    // Pause on hover
    carouselInner.addEventListener('mouseenter', stopAutoPlay);
    carouselInner.addEventListener('mouseleave', startAutoPlay);
}