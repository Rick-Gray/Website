jQuery(document).ready(function($) {

	// Script for Header Nav
	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	});

	// OnScroll-Header-style
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 50) {
	        $(".header").addClass("active");
	    } else {
	        $(".header").removeClass("active");
	    }
	});

	// Slick-slider Intialization 
	$('.slides').slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		dots: true,
  		autoplay: true
	});

	//Smooth-Scroll 
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			
			if (target.length) {
			  $('html, body').animate({
			    scrollTop: target.offset().top}, 1000);
			  return false;
			}
		}
	});

	//Full-screen Work Mockup
	$('.work-link').click(function(e) {
		e.preventDefault();
		$(window).scrollTop(0);
		var imgSrc = $('.slick-active img').attr('src');

		$('.image-box img').attr('src' ,imgSrc);
		$('.image-box').addClass('open');
		
		// var tempScrollTop = $(window).scrollTop();	
	});

	$('.clx-btn').click(function(e) {
		e.preventDefault();
		window.scrollTo(0,document.body.scrollHeight)
		$('.image-box').removeClass('open');
		$(window).scrollTop(tempScrollTop);
	});
});