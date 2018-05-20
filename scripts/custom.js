$(document).ready(function() {

	var windowH = $(window).height();
	var headerH = $('header').outerHeight();
	$('.fixedHeader').height(headerH);
	$('.videoSlider').height(windowH - headerH);

	// banner slider
	$('.bannerSlider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

	// banner slider end
	// blog slider
	$('.blogCarousal').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	// blog slider end

	// custom tabs
	$('.tabcontent').first().show();
	$('.tablinks').on('click', function(event) {
		event.preventDefault();
		var getId = $(this).data('id');
		console.log(getId);
		$('.tablinks').removeClass('active');
		$(this).addClass('active');
		$('.tabcontent').hide();
		$('#' + getId).fadeIn();
	});
	// custom tabs end
	$(".wrapNewsCon").mCustomScrollbar({
		theme: "dark"
	});

});
// $(window).on("load", function() {
// 	$(".wrapNewsCon").mCustomScrollbar({});
// });