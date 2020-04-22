const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav__active');
	burgerMenu.classList.toggle('burger-menu-active');
	document.body.classList.toggle('lock');
});

console.log(document.body.clientWidth);


if(document.body.clientWidth <= 768){
	$(document).ready(function(){
		$('.services__cards').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth:true,
			dots: true,
			arrows: false
		});
	});
}