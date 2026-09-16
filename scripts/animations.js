gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ScrollTrigger animations

gsap.to(".peraflash-container", {
  scrollTrigger: {
    trigger: ".peraflash-container",
    scrub: true,
    start: "top 92%",
    end: "top 32%"
  },

  x: 600,
  opacity: 1,
  ease: "back.out(1.7)"
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
  ease: "back.out(1.7)"
});

gsap.to(".temp-container", {
  scrollTrigger: {
    trigger: ".temp-container",
    start: "top 92%",
    end: "top 28%",
    scrub: true
  },

  x: 1000,
  opacity: 1,
  ease: "back.out(1.7)"
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
