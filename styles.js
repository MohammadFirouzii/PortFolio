const mediaMobileQuerieStyle = window.matchMedia("(max-width: 992px)");
const header = document.querySelector(".header");
const img = document.querySelector(".my-picture");
const h1 = document.querySelector(".Title");
const myPerformns = document.querySelector(".My-Performns");
const navbar = document.querySelector("nav");
function scrollStyle(e) {
  if (e.matches) {
    removeClass();
  } else {
    // Variable to track the first scroll event
    let isFirstScroll = false;

    // Event handler for the scroll event
    window.onscroll = function () {
      // Selecting DOM elements

      // If it's the first scroll or the scroll is more than 10 pixels
      if (isFirstScroll || window.scrollY > 10) {
        // Apply changes
        header.classList.add("header-scroll");
        img.classList.add("img-scroll");
        h1.classList.add("h1-scroll");
        myPerformns.classList.add("My-Performns-scroll");
        navbar.style.top = "200px";
        // Update the variable to prevent re-execution of this block
        isFirstScroll = true;
        console.log(isFirstScroll);
      } else {
        // Remove changes if it's not the first scroll and the scroll is less than 10 pixels

        removeClass();
      }
    };
  }
}

window.addEventListener("scroll", () => {
  scrollStyle(mediaMobileQuerieStyle);
});
function removeClass() {
  // Remove changes if it's not the first scroll and the scroll is less than 10 pixels
  header.classList.remove("header-scroll");
  img.classList.remove("img-scroll");
  h1.classList.remove("h1-scroll");
  myPerformns.classList.remove("My-Performns-scroll");
  navbar.style.top = "360px";
}
