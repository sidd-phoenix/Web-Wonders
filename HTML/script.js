const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === slideIndex ? 1 : 0;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Optionally, you can add event listeners for arrow navigation (if you included carousel-control in your HTML)
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Show the first slide initially
showSlide(currentSlide);

// Optionally, you can also add auto-play functionality to the carousel
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Uncomment the following lines to enable auto-play on page load
startAutoPlay();

// Uncomment the following lines to pause auto-play when hovering over the carousel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', stopAutoPlay);
carouselContainer.addEventListener('mouseout', startAutoPlay);


function openPage(url) {
    window.location.href = url;
}

function onHover(technology) {
    const technologyButtons = document.querySelectorAll('.technology-button');

    technologyButtons.forEach((button) => {
        if (button.classList.contains(technology)) {
            button.classList.remove('blur-effect');
        } else {
            button.classList.add('blur-effect');
        }
    });
}

function onMouseOut() {
    const technologyButtons = document.querySelectorAll('.technology-button');

    technologyButtons.forEach((button) => {
        button.classList.remove('blur-effect');
    });
}

// JavaScript for Login Modal
const loginModal = document.getElementById('loginModal');

function openModal() {
  loginModal.style.display = 'block';
}

function closeModal() {
  loginModal.style.display = 'none';
}

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};


const signupModal = document.getElementById('signupModal');

function openSignupModal() {
  signupModal.style.display = 'block';
}

function closeSignupModal() {
  signupModal.style.display = 'none';
}