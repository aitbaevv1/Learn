$(document).ready(function() {
	$(".header-burger").click(function() {
		$(".header-burger, .header-menu, body").toggleClass("active");
	});

	$(".what-tabs__nav-item").click(function(event) {
		event.preventDefault();

		$(".what-tabs__nav-item, .what-tabs__content-item").removeClass("active");

		$(this).addClass("active");
		$($(this).attr('href')).addClass("active");

	});


})