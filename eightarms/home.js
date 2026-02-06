let scrollContainer = document.querySelector(".horizontal-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();

  // Detect if the user is on a touch device
  const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;

  // Define the delta value based on the device type
  const delta = isTouchDevice ? evt.deltaY * -1 : evt.deltaY;

  let scrollLeft = scrollContainer.scrollLeft - delta;
  if (scrollLeft <= 0) {
    scrollContainer.scrollLeft =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
  } else if (
    scrollLeft + scrollContainer.clientWidth >=
    scrollContainer.scrollWidth
  ) {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollLeft = scrollLeft;
  }
});

//menu navigation//
document.querySelector(".hambergur").addEventListener("click", function () {
  document.querySelector(".fullscreen").classList.toggle("active");
  document.querySelector(".fullscreen").classList.remove("reverse_anim");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".fullscreen").classList.toggle("reverse_anim");
});
// For the graph

$(document).ready(function () {
  /* Uses counterup.js */
  $(".counter").counterUp({
    delay: 20,
    time: 4000,
  });

  /* Uses waypoints.js */
  $(".graph").waypoint(
    function () {
      $(".graph").addClass("grow");
    },
    { offset: "100%" }
  );
});
