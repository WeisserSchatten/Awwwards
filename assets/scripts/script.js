$(document).ready(function() {
	let random = Math.floor(Math.random() * (7 - 1) + 1);

	$('.section-main').css({
		'background-image':'url(./assets/images/bg-' + random + '.jpg)'
	});


	$('.mobile-toggler').click(function() {
		$('.header-mobile').toggleClass('-is-open');
		$('.mobile-toggler i:first-child').toggleClass('-animation_first_i');
		$('.mobile-toggler i:nth-child(2)').toggleClass('-animation_second_i')
		$('.mobile-toggler i:last-child').toggleClass('-animation_third_i');
		$('.mobile-toggler').toggleClass('-animation-mobile-toggler');
	});

	setTimeout(function() {
		$('.-from-above').addClass('-animated');
		$('.-from-bottom').addClass('-animated');
	}, 1000)
})
