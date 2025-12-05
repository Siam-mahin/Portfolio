// --------------------- COPY TO CLIPBOARD FUNCTION ---------------------
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  }).catch(err => console.error('Failed to copy', err));
}

// --------------------- NAME RAINBOW EFFECT ---------------------
const heroName = document.querySelector(".hero-name");
let hue = 0;
function rainbowName() {
  hue = (hue + 1) % 360;
  heroName.style.color = `hsl(${hue}, 100%, 50%)`;
  requestAnimationFrame(rainbowName);
}
rainbowName();

// --------------------- LIGHTING DESCRIPTION TYPING EFFECT ---------------------
const heroSub = document.querySelector(".hero-sub");
const fullText = "A results-driven Developer and Researcher with extensive experience building scalable web applications, leading and executing Machine Learning (ML) projects, and contributing to academic research";
let index = 0;

function typeWriter() {
  if(index <= fullText.length) {
    heroSub.innerText = fullText.slice(0, index);
    index++;
    setTimeout(typeWriter, 35); // typing speed in ms
  }
}
typeWriter();

// --------------------- OPTIONAL ZOOM-IN EFFECT ON HERO CONTENT ---------------------
const heroLeft = document.querySelector(".hero-left");
heroLeft.style.transform = "scale(0.95)";
heroLeft.style.opacity = "0";
setTimeout(() => {
  heroLeft.style.transition = "transform 1s ease, opacity 1s ease";
  heroLeft.style.transform = "scale(1)";
  heroLeft.style.opacity = "1";
}, 100);

// --------------------- THEME TOGGLE (LIGHT/DARK) ---------------------
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  themeBtn.innerText = isDark ? "Dark" : "Light";
});

// --------------------- SCROLL ZOOM-IN EFFECT FOR SECTIONS ---------------------
const sections = document.querySelectorAll(".section, .projects-grid, .papers-grid, .ach-grid");

sections.forEach(section => {
  section.style.transform = "scale(0.95)";
  section.style.opacity = "0";
  section.style.transition = "transform 0.6s ease, opacity 0.6s ease";
});

function handleScrollZoom() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.style.transform = "scale(1)";
      section.style.opacity = "1";
    }
  });
}

// Listen to scroll events
window.addEventListener("scroll", handleScrollZoom);

// Trigger animation on page load
handleScrollZoom();
