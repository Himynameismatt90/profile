gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.to(".peraflash-container", {
  ScrollTrigger: ".peraflash-container",
  x: 80,
  duration: 2
});

gsap.to(".moodwalk-container", {
  ScrollTrigger: ".moodwalk-container",
  x: 800,
  duration: 2
});

gsap.to(".temp-container", {
  ScrollTrigger: ".temp-container",
  x: 80,
  duration: 2
});

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
})
