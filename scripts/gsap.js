gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.to(".peraflash-container", {
  ScrollTrigger: ".peraflash-container",
  x: 80,
  duration: 2
});

gsap.to(".moodwalk-container", {
  ScrollTrigger: ".moodwalk-container",
  x: -80,
  duration: 2
});

gsap.to(".temp-container", {
  ScrollTrigger: ".temp-container",
  x: 80,
  duration: 2
})

gsap.to(".projects-wrapper", { duration: 2, scrollTo: 400 });
