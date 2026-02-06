//menu navigation//
document.querySelector(".hambergur").addEventListener("click", function () {
  document.querySelector(".fullscreen").classList.toggle("active");
  document.querySelector(".fullscreen").classList.remove("reverse_anim");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".fullscreen").classList.toggle("reverse_anim");
});
