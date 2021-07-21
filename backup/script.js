const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  let isActive = false;

  nav.addEventListener("click", () => {
    //Toggle nav
    if (isActive) {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        }
      });
      isActive = false;

      burger.classList.toggle("toggle");
    }
  });

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        isActive = true;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
