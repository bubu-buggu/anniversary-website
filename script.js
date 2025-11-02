// script.js
// Small helper functions for your pages

// ---------- Password Page ----------
function checkPassword() {
  const input = document.getElementById("password").value.trim();
  if (input === "0611") {
    window.location.href = "slideshow.html";
  } else {
    alert("Wrong password! Hint: Our special day 💞");
  }
}

// ---------- Slideshow Page ----------
// 💞 Slideshow Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    slideIndex = (slideIndex + 1) % totalSlides;
}

setInterval(showSlides, 3000); // change every 3 seconds


// Run slideshow automatically if slideshow page
// 💞 Slideshow Logic
window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    function showSlides() {
        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
    }

    showSlides(); // show the first one immediately
    setInterval(showSlides, 3000); // change every 3 seconds
});



