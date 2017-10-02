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
		autoplay: false,
	});
    $('.block_congresses').owlCarousel({
		loop:true,
		smartSpeed: 1000,
		nav:true,
		dots:true,
		dotsEach:true,
		navText:false,
		items: 1,
		autoplay: false,
	});
});
