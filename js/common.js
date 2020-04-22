const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav__active');
	burger.classList.toggle('nav__burger-active');
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