let index = 0;

const slides = document.getElementById("slides");
const images = slides.querySelectorAll("img");

const totalSlides = images.length;

function updateSlider() {

  const slideWidth = images[0].clientWidth;

  slides.style.transform = `translateX(-${index * slideWidth}px)`;

}

function nextSlide() {

  if (index >= totalSlides - 1) {
    index = 0;
  } else {
    index++;
  }

  updateSlider();
}

function prevSlide() {

  if (index <= 0) {
    index = totalSlides - 1;
  } else {
    index--;
  }

  updateSlider();
}

/* AUTO SLIDE */

setInterval(nextSlide, 4000);

/* MOBILE MENU */

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* Auto Type Func*/

document.addEventListener("DOMContentLoaded", function () {

    var typed = new Typed('.auto-type', {
        strings: [
            "Welcome to my native town in Pakistan",
        "Discover the natural beauty of Pakistan",
        "Explore mountains, valleys, and culture",
        "Experience the hospitality of our people",
        "A land rich in history and traditions"
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

});
