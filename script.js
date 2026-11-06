// Dynamic Greeting based on time of day
document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.querySelector(".greeting");
  const hour = new Date().getHours();
  
  let timeGreeting = "Hey there";
  if (hour < 12) {
    timeGreeting = "Good morning";
  } else if (hour < 18) {
    timeGreeting = "Good afternoon";
  } else {
    timeGreeting = "Good evening";
  }

  if (greetingElement) {
    greetingElement.textContent = `${timeGreeting}, I'm`;
  }
});

// Smooth Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Simple Scroll Reveal Effect for Cards
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-card, .project-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(el);
});