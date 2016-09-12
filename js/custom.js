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

	function fetchVimeoThumb() {

	  $('.vimeo-player').each(function() {

	    var vimeoPlayer = $(this);
	    var vimeoID = vimeoPlayer.data('vimeoid')


	    $.getJSON('https://vimeo.com/api/v2/video/'+vimeoID+'.json?callback=?', function(json) {

	      // store returned dato into variables
	      videoData = json[0];
	      videoThumbURL = videoData.thumbnail_large;
	      videoTitle = videoData.title;
	      videoTags = videoData.tags;

	      // trigger a function
	      injectVideoData();

	    });

	    function injectVideoData() {

	      vimeoPlayer.attr('src', videoThumbURL);
	      vimeoPlayer.attr('title', videoTitle);
	      vimeoPlayer.attr('alt', videoTags);

	    }

	  });
	};


	function insertVimeoVideo() {
	  $('.vimeo-embed-overlay').click(function(){

	    $(this).fadeOut();
	    $(this).parent().html('<iframe src="https://player.vimeo.com/video/'+$(this).siblings('.vimeo-player').data('vimeoid')+'?portrait=0&title=0&color=bf1f48&badge=0&byline=0&autoplay=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');

	  });
	};

	// smart Vimeo embed
	insertVimeoVideo();
	fetchVimeoThumb();


	// skrollr
	var s = skrollr.init();


});
