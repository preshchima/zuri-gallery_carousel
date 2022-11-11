"use strict";

// Slider
const slider = function () {
  //select DOM elements
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const slider = document.querySelector(".slider").children;

  let curSlide = 0;
  const maxSlide = slides.length;

  //display directional icons
  const displayIcon = function () {
    btnLeft.classList.remove("hidden");
    btnRight.classList.remove("hidden");
  };

  //remove directional icons
  const removeIcon = function () {
    btnLeft.classList.add("hidden");
    btnRight.classList.add("hidden");
  };

  //move to slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  Array.from(slider).forEach(slide => {
    slide.addEventListener("mouseover", displayIcon);
    slide.addEventListener("mouseout", removeIcon);
  });
};

slider();
