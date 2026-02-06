/*let textCont = document.querySelector(".text-container");
let squiggle = document.querySelector(".squiggle");
let paper = document.querySelector(".paper");

 enterView({
  selector: ".hero-scroll-container",
  progress: function (el, progress) {
    squiggle.style.scale = 5 - 5 * progress; //5 is big, 1 is small, but numbers need to be the same
    textCont.style.scale = 5 - 5 * progress;
    textCont.style.opacity = 1.2 - 2 * progress;
    paper.style.opacity = 0 + 1 * progress;
  },
  offset: 0.5,
}); */

let squiggle = document.querySelector(".squiggle");
let textCont = document.querySelector(".text-container");
let paper = document.querySelector(".paper");
let isScrollEnabled = false;
let isAtTop = true;

// Set initial opacity to 0 in CSS
textCont.style.opacity = "0";

enterView({
  selector: ".hero-scroll-container",
  enter: function () {
    squiggle.style.transform = "scale(5)";
    textCont.style.transform = "scale(5)";
    // Set initial opacity to 1 when text-container is in view
    if (isAtTop) {
      textCont.style.opacity = "1";
    }
  },
  progress: function (el, progress) {
    let viewportHeight = window.innerHeight;
    let squiggleHeight = squiggle.getBoundingClientRect().height;
    let maxSquiggleScale = Math.max(viewportHeight / squiggleHeight, 1);
    let squiggleScale = 5 - (5 - maxSquiggleScale) * progress;
    squiggleScale = Math.max(squiggleScale, maxSquiggleScale);
    squiggle.style.transform = `scale(${squiggleScale})`;

    let maxTextScale = maxSquiggleScale;
    let textScale = 6 - (6 - maxTextScale) * progress;
    textScale = Math.max(textScale, maxTextScale);
    textCont.style.transform = `scale(${textScale})`;

    let textOpacity = 2 - 2 * progress;
    textOpacity = Math.max(textOpacity, 0); // Ensure opacity is not negative
    textCont.style.opacity = textOpacity.toFixed(3); // Round opacity to 3 decimal places

    let paperOpacity = 0 + 1 * progress;
    paper.style.opacity = paperOpacity;

    isAtTop = window.scrollY === 0;
    if (
      isAtTop &&
      !isScrollEnabled &&
      squiggleScale >= viewportHeight / squiggleHeight
    ) {
      document.body.style.overflow = "auto";
      isScrollEnabled = true;
    }
  },
  offset: 0.1, // Set offset to 0.1 as before
});

// Remove the transform from CSS
document.querySelector(".squiggle").style.transform = "";
document.querySelector(".text-container").style.transform = "";

//nav
var navigation = document.querySelector(".nav-btm");
var burger = document.querySelector(".nav-burger");

function toggleNav() {
  navigation.classList.toggle("nav-open");
  burger.classList.toggle("nav-burger-close");
}
//navigation
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//fade in and out script

var el = document.querySelector("#t1");

enterView({
  selector: "#t1",
  enter: function (el) {
    el.style.opacity = 1;
  },

  exit: function (el) {
    el.style.opacity = 0;
  },
  offset: 0.5,
});
