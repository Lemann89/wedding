const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav__active');
	burger.classList.toggle('nav__burger--active');
	document.body.classList.toggle('lock');
});