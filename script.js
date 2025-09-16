// Sidebar active link highlight on scroll
const links = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
  

// Hero section circle rotation
document.addEventListener("DOMContentLoaded", () => {
  const circleImg = document.querySelector(".circle img");
  let angle = 0;

  function rotate() {
    angle = (angle + 1) % 360;
    circleImg.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate); 
  }

  rotate(); 
});

});



