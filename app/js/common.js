$(function() {

	// Services Items
	var servicesItems = $('.services__item');

	servicesItems.on('click',  function(event) {
		servicesItems.removeClass('services__item--active');
		$(this).addClass('services__item--active');
	});

	//carousel section
	var brands = $('.brands__carousel');
	var banner = $('.main-banner__carousel');

	brands.owlCarousel({
		items: 5,
		autoplay: true
	});
	banner.owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		smartSpeed: 4000,
		autoplayTimeout: 10000,
		nav: true,
		autoplayHoverPause: true,
		navText: ['&#xf062;', '&#xf063;']
		// autoplaySpeed: 5000
	});


	var upButton = $('.up-button');
	upButton.on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 600);
	});
});
