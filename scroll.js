const sectionMySkils = document.querySelector(".section-my-skils h4");
const sectionMyProject = document.querySelector(".section-my-project h4");
const distanceMySkilsFromTop =
  sectionMySkils.getBoundingClientRect().top + window.scrollY;
const distanceMyProjectFromTop =
  sectionMyProject.getBoundingClientRect().top + window.scrollY;
const ScrollButtonToAboutMeD = document.querySelector(".scroll-to-about-me");
const ScrollButtonToMySkilsD = document.querySelector(".scroll-to-my-skils");
const ScrollButtonToMyProjectD = document.querySelector(
  ".scroll-to-my-project"
);
const headerWidth = 350;
const ScrollButtonToAboutMeM = document.querySelector(
  ".scroll-to-about-me-mobile"
);
const ScrollButtonToMySkilsM = document.querySelector(
  ".scroll-to-my-skils-mobile"
);
const ScrollButtonToMyProjectM = document.querySelector(
  ".scroll-to-my-project-mobile"
);
const distanceMySkilsFromTopD = distanceMySkilsFromTop - headerWidth;
const distanceMyProjectFromTopD = distanceMyProjectFromTop - headerWidth;
const windowWidth = window.innerWidth;
const mediaMobileQuerie = window.matchMedia("(max-width: 992px)");

function scroll(e) {
  // Mobile scroll

  if (e.matches) {
    // Scroll commands for different sections
    ScrollButtonToAboutMeM.addEventListener("click", () => {
      const topOffset = 0;

      // Scroll to the target section with smooth animation
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    });

    ScrollButtonToMySkilsM.addEventListener("click", () => {
      const topOffset = distanceMySkilsFromTop;

      // Scroll to the target section with smooth animation
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    });

    ScrollButtonToMyProjectM.addEventListener("click", () => {
      const topOffset = distanceMyProjectFromTop;

      // Scroll to the target section with smooth animation
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    });
  }

  // computer scroll
  else {
  }

  // Scroll commands for different sections
  ScrollButtonToAboutMeD.addEventListener("click", () => {
    const topOffset = 0;

    // Scroll to the target section with smooth animation
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  });

  ScrollButtonToMySkilsD.addEventListener("click", () => {
    const topOffset = distanceMySkilsFromTopD;
    // Scroll to the target section with smooth animation
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  });

  ScrollButtonToMyProjectD.addEventListener("click", () => {
    const topOffset = distanceMyProjectFromTopD;

    // Scroll to the target section with smooth animation
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  });
}

scroll(mediaMobileQuerie);
mediaMobileQuerie.addEventListener("change", function () {
  scroll(mediaMobileQuerie);
});
// Add an EventListener for the onscroll event
window.addEventListener("scroll", function () {
  handleScroll(mediaMobileQuerie);
});
function handleScroll(e) {
  const verticalScroll = window.scrollY;
  if (e.matches) {
    //  handleMobileScroll
    if (verticalScroll < distanceMySkilsFromTop - 50) {
      ScrollButtonToAboutMeM.classList.add("active");
      ScrollButtonToMySkilsM.classList.remove("active");
      ScrollButtonToMyProjectM.classList.remove("active");
    } else if (verticalScroll < distanceMyProjectFromTop - 50) {
      ScrollButtonToMySkilsM.classList.add("active");
      ScrollButtonToAboutMeM.classList.remove("active");
      ScrollButtonToMyProjectM.classList.remove("active");
    } else {
      ScrollButtonToMyProjectM.classList.add("active");
      ScrollButtonToAboutMeM.classList.remove("active");
      ScrollButtonToMySkilsM.classList.remove("active");
    }
  } else {
    // handleDesktopScroll

    if (verticalScroll < distanceMySkilsFromTopD - 50) {
      ScrollButtonToAboutMeD.classList.add("active");
      ScrollButtonToMySkilsD.classList.remove("active");
      ScrollButtonToMyProjectD.classList.remove("active");
    } else if (verticalScroll < distanceMyProjectFromTopD - 50) {
      ScrollButtonToAboutMeD.classList.remove("active");
      ScrollButtonToMySkilsD.classList.add("active");
      ScrollButtonToMyProjectD.classList.remove("active");
    } else {
      ScrollButtonToAboutMeD.classList.remove("active");
      ScrollButtonToMySkilsD.classList.remove("active");
      ScrollButtonToMyProjectD.classList.add("active");
    }
  }
}
