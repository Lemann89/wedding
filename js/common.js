//Burger

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav__active');
	burgerMenu.classList.toggle('burger-menu-active');
	document.body.classList.toggle('lock');
});

//Services Slider

if(document.body.clientWidth <= 769){
	$(document).ready(function(){
		$('.services__cards').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode:true,
			dots: true,
			arrows: false
		});
	});
}

//Coaches Slider

$(document).ready(function(){
	$('.coaches__cards')
	.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		infinite: false,
		appendArrows: $('.coaches__navigation'),
		prevArrow: '<button type="button" class="coaches__arrow coaches__arrow--prew"><img src="img/arrow.svg" alt="arrow"></button>',
		nextArrow: '<button type="button" class="coaches__arrow coaches__arrow--next"><img src="img/arrow.svg" alt="arrow"></button>',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
					slidesToScroll: 1,
					arrows: false,
					slidesToShow: 1.2,
					dots: true
				}
			}
		]
	})
	.on('afterChange', function(e, slick, currentSlide) {
		$('.coaches__count').text(currentSlide + 2 + ' of ' + slick.slideCount);
	});
	var slick = $('.coaches__cards').slick('getSlick');
	$('.coaches__count').text(slick.currentSlide + 2 + ' of ' + slick.slideCount);
});
