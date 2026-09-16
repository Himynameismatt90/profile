gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// NAVBAR
// scrollTo section

const topButton = document.getElementById("js-top-btn");
const aboutButton = document.getElementById("js-about-btn");
const projectsButton = document.getElementById("js-projects-btn");
const contactButton = document.getElementById("js-contact-btn");

topButton.addEventListener('click', () => {
  gsap.to(window, { duration: 1, scrollTo: {y:".navbar"} });
});

aboutButton.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: {y:".about-me-desc"}});
});

projectsButton.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: {y:".title", offsetY: 120}});
});

contactButton.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: {y:".link-box"} })
});

// INTRO
// Glitch text effect

const glitchElement = document.querySelector('.glitch-text');
const turquoise = "#00ffff";
const pink = "#ff00ff";

glitchElement.addEventListener('mouseenter', () => {

  gsap.killTweensOf(glitchElement);

  gsap.to(glitchElement, {
    duration: 1,
    textShadow: "-4px 0px 10px rgba(0, 255, 255, 0.5), 4px 0px 10px rgba(255, 0, 255, 0.5)",
    ease: "power1.out"
  });
});

glitchElement.addEventListener('mouseleave', () => {

  gsap.killTweensOf(glitchElement);

  gsap.to(glitchElement, {
    duration: 1,
    textShadow: "none",
    ease: "power1.out"
  });
});


// PROJECTS
// ScrollTrigger animations

gsap.to(".peraflash-container", {
  scrollTrigger: {
    trigger: ".peraflash-container",
    scrub: true,
    start: "top 92%",
    end: "top 32%"
  },

  x: 480,
  opacity: 1,
  ease: "back.out(2)"
});

gsap.to(".pera-title", {
  x: 744,
  opacity: 1,
  ease: "back.out(2)"
});

gsap.to(".pera-text", {
  x: 308,
  opacity: 1,
  ease: "back.out(2)"
});

gsap.from(".moodwalk-container", {
  scrollTrigger: {
    trigger: ".moodwalk-container",
    start: "top 100%",
    scrub: true,
    start: "top 92%",
    end: "top 28%"
  },

  x: 560,
  opacity: 0,
  ease: "back.out(2)"
});

gsap.to(".temp-container", {
  scrollTrigger: {
    trigger: ".temp-container",
    start: "top 92%",
    end: "top 28%",
    scrub: true
  },

  x: 920,
  opacity: 1,
  ease: "back.out(2)"
});
