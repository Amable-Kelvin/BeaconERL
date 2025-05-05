// Slideshow Animation
let slideIndex = 0;
const slides = document.querySelectorAll(".slide","slideshow-container");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === slideIndex ? "1" : "0";
    });

    slideIndex = (slideIndex + 1) % slides.length;

    let textIndex = 0;
    const textSlides = document.querySelectorAll(".slide","slideshow-container");
    
    function showTextSlides() {
        textSlides.forEach((slide, index) => {
            slide.style.opacity = index === textIndex ? "1" : "0";
        });
    
        textIndex = (textIndex + 1) % textSlides.length;
    }
    
    setInterval(showTextSlides, 3000);
}

setInterval(showSlides, 3000);