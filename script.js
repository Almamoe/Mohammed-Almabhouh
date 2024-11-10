function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY + window.innerHeight * 0.6;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
  
        if (scrollPosition > sectionTop) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    });
  });
  