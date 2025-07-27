const slide = document.querySelector(".galeria-slide");
const images = document.querySelectorAll(".galeria-slide img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;

function updateSlide() {
  const imageWidth = images[0].clientWidth;
  slide.style.transform = `translateX(${-imageWidth * counter}px)`;
}

function goToSlide(index) {
  if (index < 0) index = 0;
  if (index >= images.length) index = images.length - 1;
  counter = index;
  updateSlide();
}

nextBtn.addEventListener("click", () => {
  goToSlide(counter + 1);
});

prevBtn.addEventListener("click", () => {
  goToSlide(counter - 1);
});

window.addEventListener("resize", () => {
  updateSlide();
});

window.addEventListener("load", () => {
  updateSlide();
});
