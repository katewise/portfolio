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

//hero fADE

window.addEventListener("scroll", function () {
  var background = document.querySelector(".hero-gallery");

  var scrollPos = window.scrollY;
  if (scrollPos > 0) {
    background.classList.add("fade-out");
  } else {
    background.classList.remove("fade-out");
  }
});
