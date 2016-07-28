
$(document).ready(function() {
	
	// smooth scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});
	
	
	// waypoints
	$('#about').waypoint({
//		offset: 70,
//		handler: function(direction) {
//	    	$('.top-bar').fadeIn().toggleClass('top-bar-sticky');
//		}
	});
	
	
	// smart Vimeo embed
	insertVimeoVideo();
	fetchVimeoThumb();
        

	// skrollr
	var s = skrollr.init();
	
	
	// instafeed
	var userFeed = new Instafeed({
		get: 'user',
		userId: 839472152,
		accessToken: '839472152.467ede5.84d17f1280d14906a905f343b0761572',
		limit: 9,
		resolution: 'low_resolution',
		template: '<a href="{{link}}" target="_blank" class="instagram-pic"><img src="{{image}}" /></a>'
	});
	userFeed.run();
	
});




