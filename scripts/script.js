const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  document.getElementById("openModalBtn").addEventListener("click", openModal);

  let menu = document.querySelector("header ul");
  let menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      menu.classList.toggle("show-menu")
      menuToggle.classList.toggle("active")
  });
  menuToggle.addEventListener("resize", function() {
    if (window.innerWidth > 480 && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active");
    }
});