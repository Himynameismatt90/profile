

const toggleBtn = document.querySelector('.js-toggle-btn');
const aboutBox = document.querySelectorAll(".js-about-box");
const linkLogo = document.querySelectorAll('.js-link-logo');


const savedTheme = localStorage.getItem('theme');
const darkMode = (savedTheme === 'dark');


if (darkMode) {
    document.body.classList.add('dark-mode');
    toggleBtn.innerText = "☀️";
    aboutBox.forEach(box => box.classList.add('about-dark'));
    linkLogo.forEach(logo => logo.classList.add('link-dark'));
}

toggleBtn.addEventListener('click', () => {
  const darkTheme = document.body.classList.toggle('dark-mode');

  localStorage.setItem('theme', darkTheme ? "dark" : "light");

  toggleBtn.textContent = darkTheme ? "☀️" : "🌙"
  aboutBox.forEach(box => box.classList.add('about-dark', darkTheme));
  linkLogo.forEach(logo => logo.classList.add('link-dark', darkTheme));
});
