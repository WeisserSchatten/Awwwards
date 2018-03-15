$(document).ready(function() {
	let random = Math.floor(Math.random() * (7 - 1) + 1);
  	$(".owl-carousel").owlCarousel({
  		items: 1,
  		autoHeight: true,
  		nav: true
  	});
	$('.section-main').css({
		'background-image':'url(./assets/images/bg-' + random + '.jpg)'
	});

    AOS.init();

    $('.scroll p').click(function(){
    	$('html,body').animate({ scrollTop: $('.section-portfolio').offset().top }, 500);
    })

	let modalToggler = $('.js-modal-toggler'),
		modal = $('.modal'),
		headerMobile = $('.header-mobile'),
		modalElems = [
		'.js-modal-github',
		'.js-modal-vk',
		'.js-modal-mail',
		'.js-modal-protfolio',
		'.modal-map',
		'.modal-toggler'
		];

	$('.mobile-toggler').click(function() {
		headerMobile.toggleClass('-is-open');
		modal.removeClass('-active');
	});

	setTimeout(function() {
		$('.-from-above').addClass('-animated');
		$('.-from-bottom').addClass('-animated');
	}, 1000)



	modalToggler.click(function() {
		modal.toggleClass('-active');
		headerMobile.removeClass('-is-open');

		for (let i = 0; i < modalElems.length; i++) {
			let timeToWait = i * 200;

			setTimeout(function() {
				$(modalElems[i]).toggleClass('-active');
			}, 200 + timeToWait);
		}
	});

})
