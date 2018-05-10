// //Adjust Slider height
// var topBar = $('.top-bar').innerHeight(),
// 	menu   = $('.menu-bar').innerHeight(),
// 	windh  = $(window).height();
// $('.carousel, .carousel-item').height(windh - (menu + topBar));

//prevent Loading page When clicking on link 
$('a').click(function(event) {
	/* Act on the event */
	event.preventDefault();
});

//Smooth scroll to sections
$('.collapse ul li a').click(function() {
	/* Act on the event */
	$('body , html').animate({
		scrollTop: $($(this).data('scroll')).offset().top - 50
	}, 1000)
});

//Smooth Scroll to top with Arrow
$('.arrow i').click(function() {
	$('body , html').animate({
		scrollTop: 0
	}, 1200)
});


//Side Menu
//Open Side Menu
$('.side-icon a').click(function() {
	$('.top-menu-sm').animate({
		right: '0px'
	}, 500)
});
//close side menu
$('.top-menu-sm i').click(function() {
	$('.top-menu-sm').animate({
		right: '-200px'
	}, 500)
});
