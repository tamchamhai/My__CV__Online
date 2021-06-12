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
