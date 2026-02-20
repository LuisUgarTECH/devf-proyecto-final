// Scroll
const enterButton = document.getElementById("enter-cave");

enterButton.addEventListener("click", () => {
  const caveSection = document.getElementById("cave");

  caveSection.scrollIntoView({
    behavior: "smooth"
  });
});

const observerOptions = {
  threshold: 0.2
};

const revealElements = document.querySelectorAll(
  ".section-title, .section-description, .project-card, .contact-content"
);

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(element => {
  element.classList.add("hidden");
  revealOnScroll.observe(element);
});

// Contacto señal
const contactSection = document.getElementById("contact");
const signal = document.querySelector(".signal-light");

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      signal.style.opacity = "1";
    } else {
      signal.style.opacity = "0.3";
    }
  });
}, { threshold: 0.5 });

contactObserver.observe(contactSection);

// Menu habmurguesa responsive
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Sección de contacto
const contactBtn = document.querySelector(".contact-button");
const batModal = document.getElementById("batmodal");
const closeModal = document.getElementById("close-modal");

function openModal() {
  batModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalSmooth() {
  batModal.classList.remove("active");

  setTimeout(() => {
    document.body.style.overflow = "";
  }, 500);
}

contactBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalSmooth);

batModal.addEventListener("click", (e) => {
  if (e.target === batModal) {
    closeModalSmooth();
  }
});