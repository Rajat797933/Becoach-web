
  

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





