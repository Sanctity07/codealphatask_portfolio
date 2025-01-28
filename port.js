const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle 'active' class to show/hide the menu
});
const phrases = ["Frontend Developer", "UI Enthusiast", "CSS Wizard", "JavaScript Guru"];
let index = 0;
setInterval(() => {
  document.getElementById("marquee").textContent = phrases[index];
  index = (index + 1) % phrases.length;
}, 2000);


