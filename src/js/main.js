import Typed from "../../node_modules/typed.js/src/typed.js";
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
