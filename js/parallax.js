const layers = document.querySelectorAll(".parallax-layer");

let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;
  const isMobile = window.innerWidth <= 768;

  layers.forEach(layer => {
    const speed = parseFloat(layer.getAttribute("data-speed"));

    const adjustedSpeed = isMobile ? speed * 0.5 : speed;

    const movement = scrollY * adjustedSpeed;

    layer.style.transform = `translateY(${movement}px)`;
  });

  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);