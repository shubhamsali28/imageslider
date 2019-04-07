$(document).ready(function() {

$('.next').on('click', function() {
	var cImage = $('.active'); // Current active class image
	var nImage = cImage.next(); // To grab next image


if(nImage.length) { // To check if there is next image. If there is next image then it will return 1 if not then 0
	cImage.removeClass('active').css('z-index', -10);
	nImage.addClass('active').css('z-index', -10);
}

});

$('.prev').on('click', function() {
	var cImage = $('.active');
	var nImage = cImage.prev(); // Previous image

if(nImage.length) {
	cImage.removeClass('active').css('z-index', -10);
	nImage.addClass('active').css('z-index', -10);
}

});


});