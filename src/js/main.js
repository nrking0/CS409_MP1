/* Your JS here. */
window.addEventListener("hashchange", () => {
    const hash = window.location.hash;
    const navHeight = document.querySelector("nav").offsetHeight;

    if (hash === "#section1") {
        const section = document.querySelector(".section1");
        window.scrollTo({
          top: section.offsetTop - navHeight,
          behavior: "smooth"
        });
    } else if (hash === "#section2") {
        const section = document.querySelector(".section2");
        window.scrollTo({
          top: section.offsetTop - navHeight,
          behavior: "smooth"
        });
    } else if (hash === "#section3") {
        const section = document.querySelector(".section3");
        window.scrollTo({
          top: section.offsetTop - navHeight,
          behavior: "smooth"
        });
    } else if (hash === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.history.replaceState(null, null, "/");

})

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav li");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const navHeight = document.querySelector("nav").offsetHeight;
    if (window.scrollY >= sectionTop - navHeight) {
      currentSection = section.getAttribute("class");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    const a  = link.querySelector("a");
    if (a.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });

    const nav = document.querySelector("nav");
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const button = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector(".overlay");

button.addEventListener("click", () => {
    modal.classList.add("open");
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
});
