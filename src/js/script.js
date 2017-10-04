$(document).ready(function() {
    $('.book-slider').owlCarousel({
		loop:true,
		smartSpeed: 1000,
		nav:true,
		dots:true,
		dotsEach:true,
		navText:false,
		items: 1,
		autoplay: true,
	});
    $('.index-slider').owlCarousel({
		loop:true,
		smartSpeed: 1000,
		nav:true,
		dots:false,
		dotsEach:true,
		navText:false,
		items: 1,
		autoplay: true,
	});
    $('.block_meeting').owlCarousel({
		loop:true,
		smartSpeed: 1000,
		nav:true,
		dots:true,
		dotsEach:true,
		navText:false,
		items: 1,
		autoplay: true,
	});
    $('.block_congresses').owlCarousel({
		loop:true,
		smartSpeed: 1000,
		nav:true,
		dots:true,
		dotsEach:true,
		navText:false,
		items: 1,
		autoplay: true,
	});
    $('.media__body').owlCarousel({
		loop:true,
		smartSpeed: 1000,
		nav:true,
		dots:true,
		dotsEach:true,
		navText:false,
		items: 1,
		autoplay: true,
	});

    $('.menu-main > li').hover(function () {
        if ( $(this).children('ul').length != 0 ) {
            $('.menu-main').addClass('menu-main_border');
        }
    }, function () {
        if ( $(this).children('ul').length != 0 ) {
            $('.menu-main').removeClass('menu-main_border');
        }
    });
});
