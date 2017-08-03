$(function() {

	// Services Items
	var servicesItems = $('.services__item');

	servicesItems.on('click',  function(event) {
		servicesItems.removeClass('services__item--active');
		$(this).addClass('services__item--active');
	});

});
