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


	// video popup
	$('.videos span').on('click', function(event) {
		event.preventDefault();
		var getUrl = $(this).find('iframe').attr('src');
		$('.videoPop').fadeIn();
		$('.popContainer .popBody iframe').attr('src', getUrl + '?autoplay=1');
		/* Act on the event */
	});
	$
		('.popContainer .closeBtn').on('click', function(event) {

			$('.videoPop').fadeOut();
			$('.popContainer .popBody iframe').attr('src', '');
			/* Act on the event */
		});

	// video popup end
});