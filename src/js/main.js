// import Typed from "../../node_modules/typed.js/src/typed.js";
// import Typed from "./typed.js";
new WOW().init();
let getEle = (id) => {
  return document.getElementById(id);
};

// Home - typing animate
var typing__text = new Typed("#typing__text", {
  strings: [
    "My name is <i>Phi Long</i> 😎",
    "I'm an <strong>electrical engineer</strong>",
    "I'm a <strong>Front end Developer</strong>",
    "I'm a <strong>gamer</strong>",
    "and... <strong>cat owner</strong>",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  showCursor: false,
  smartBackspace: true, // this is a default
  loop: true,
});

// Home - social toggle
$(document).ready(() => {
  $("#toggle-click").click(() => {
    $(".social-item").toggle("tooltip-active");
  });
});

// Active ham btn toggle
$("#nav-toggle-btn").click(() => {
  getEle("nav-toggle-btn").classList.toggle("active-btn-ham");
  getEle("navbar-list").classList.toggle("active-navbar-list");
});

// Skill section: handle active indicator
let skill_item = document.querySelectorAll(".item");
let skill_wrap = document.querySelectorAll(".skill-wrap");
let skill_wrap_item = document.querySelectorAll(".skill-wrap-item");
for (let i = 0; i < skill_item.length; i++) {
  skill_item[i].onmouseover = () => {
    let j = 0;
    while (j < skill_item.length) {
      skill_item[j].className = "item";
      skill_wrap[j].classList.remove("dis-block");
      skill_wrap[j].classList.add("dis-none");
      j++;
    }
    skill_item[i].className = "item skill-active";
    skill_wrap[i].classList.add("dis-block");
    skill_wrap[i].classList.remove("dis-none");
  };
}
skill_item.forEach((elements) => {
  elements.addEventListener("mouseenter", (event) => {
    let bg = getEle("skills");
    let color = event.target.getAttribute("data-color");
    bg.style.backgroundColor = color;
    for (let i = 0; i < skill_wrap_item.length; i++) {
      skill_wrap_item[i].style.backgroundColor = color;
    }
  });
});

// Scrollspy effect
let scrollspy = document.querySelectorAll(".scrollspy");
let header_nav = document.querySelectorAll(".header-nav");
let nav_item = document.querySelectorAll(".nav-item");
for (let i = 0; i < scrollspy.length; i++) {
  scrollspy[i].onmouseenter = () => {
    let j = 0;
    while (j < scrollspy.length) {
      header_nav[j].classList.remove("active-header-nav");
      j++;
    }
    header_nav[i].classList.add("active-header-nav");
  };
}
for (let i = 0; i < scrollspy.length; i++) {
  nav_item[i].addEventListener("click", () => {
    let j = 0;
    while (j < scrollspy.length) {
      header_nav[j].classList.remove("active-header-nav");
      j++;
    }
    header_nav[i].classList.add("active-header-nav");
  });
}

// Parallax scrolling farewell bg
let moon = getEle("moon");
let star = getEle("star");
let mountains_behind = getEle("mountains_behind");
let mountains_front = getEle("mountains_front");
let farewell_text = getEle("farewell_text");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  star.style.left = (value - 3357) * 0.15 + "px";
  moon.style.top = (value - 3557) * 1.05 + "px";
  if (value > 3357) {
    mountains_behind.style.top = (value - 3357) * 0.5 + "px";
  }
  mountains_front.style.top = (value - 3357) * 0 + "px";
  farewell_text.style.marginRight = (value - 3457) * 6 - 350 + "px";
  farewell_text.style.marginTop = value - 3357 + "px";
});

// Set preload page
window.onload = () => {
  setTimeout(() => {
    getEle("preloader").style.display = "none";
  }, 5000);
};

// Make slider
let slider_item = document.querySelectorAll(".slider-item");
let dot = document.querySelectorAll(".dot");
let sliderIndex = 0;
let sliderOutIndex = 1;
let nextSliderDelay = 2000;
let prev = getEle("prev-icon").addEventListener("click", () => {
  sliderOutIndex = sliderIndex;
  sliderIndex -= 1;
  showSlider("Left", "Right");
});
let next = getEle("next-icon").addEventListener("click", () => {
  sliderOutIndex = sliderIndex;
  sliderIndex += 1;
  showSlider("Right", "Left");
});

let showSlider = (direction1, direction2) => {
  for (let i = 0; i < slider_item.length; i++) {
    slider_item[i].style.zIndex = "-2";
    dot[i].classList.remove("slider-dot-active");
  }
  // Set index out of range
  if (sliderIndex < 0) {
    sliderIndex = slider_item.length - 1;
  }
  if (sliderIndex >= slider_item.length) {
    sliderIndex = 0;
  }
  slider_item[sliderOutIndex].style.zIndex = "1";
  slider_item[sliderOutIndex].style.animation =
    "slideOut" + direction1 + " .4s linear";
  setTimeout(() => {
    slider_item[sliderOutIndex].style.zIndex = "-2";
  }, 400);
  slider_item[sliderIndex].style.zIndex = "1";
  slider_item[sliderIndex].style.animation =
    "slideIn" + direction2 + " .4s linear";
  dot[sliderIndex].classList.add("slider-dot-active");
};
// Set auto next slider
for (let i = 0; i < slider_item.length; i++) {
  slider_item[i].onmouseenter = () => {
    nextSliderDelay = 99999999999999;
    console.log(nextSliderDelay);
  };
  slider_item[i].onmouseleave = () => {
    nextSliderDelay = 2000;
    console.log(nextSliderDelay);
  };
}
let autoNextSlider = () => {
  setInterval(() => {
    sliderOutIndex = sliderIndex;
    sliderIndex += 1;
    showSlider("Right", "Left");
  }, nextSliderDelay);
};
autoNextSlider();
showSlider();
