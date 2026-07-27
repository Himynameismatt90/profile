const toggleBtn = document.querySelector('.js-toggle-btn');
const aboutBox = document.querySelectorAll(".js-about-box");
const linkLogo = document.querySelectorAll('.js-link-logo');

toggleBtn.addEventListener('click', () => {
  if (!document.body.classList.contains('dark-mode')) {
    document.body.classList.add('dark-mode');
    toggleBtn.innerText = "☀️";

    aboutBox.forEach(box => box.classList.add('about-dark'));

    linkLogo.forEach(logo => logo.classList.add('link-dark'));
  } else {
    document.body.classList.remove('dark-mode');
    toggleBtn.innerText = "🌙";

    aboutBox.forEach(box => box.classList.remove('about-dark'));

    linkLogo.forEach(logo => logo.classList.remove('link-dark'));
  }
});
