
$(document).on("scroll",function() {

	if($(document).scrollTop()>50){
		$("header").removeClass("big").addClass("small");
	} else {
		$("header").removeClass("small").addClass("big");
	}

});

$(document).ready(function() {
$(".nextLink").on("click", function(e){

      var currentImage = $(".imageDisplayed");
      var nextImage = currentImage.next();

      if(nextImage.length == 0)
      {
        nextImage = $(".carousel-slides img").first();
      }

      currentImage.removeClass("imageDisplayed").addClass("imageHidden").css("z-index", -10);
      nextImage.addClass("imageDisplayed").removeClass("imageHidden").css("z-index", 20);
      $(".carousel-slides img").not([currentImage, nextImage]).css("z-index", 1);

      e.preventDefault();

    });

});

$(document).ready(function() {

	$(".prevLink").on("click", function(e){

      var currentImage = $(".imageDisplayed");
      var nextImage = currentImage.prev();

      if(nextImage.length == 0)
      {
        nextImage = $(".carousel-slides img").last();
      }

      currentImage.removeClass("imageDisplayed").addClass("imageHidden").css("z-index", -10);
      nextImage.addClass("imageDisplayed").removeClass("imageHidden").css("z-index", 20);

      $(".carousel-slides img").not([currentImage, nextImage]).css("z-index", 1);

      e.preventDefault();

    });

});


$(document).ready(function() {

	$("a[href^='#']").on("click", function(e) {

		e.preventDefault();

		var hash = this.hash;
		var $hash = $(hash);

		$("html, body").animate({scrollTop: $hash.offset().top}, 800, function(){
			window.location.hash = hash;
		});

	});

});


$(document).ready(function() {

	$(window).scroll(function(){

		var position = $(window).scrollTop();

		var navAbout = $("#navAbout");
		var navArtwork = $("#navArtwork");
		var navMusic = $("#navMusic");

		if ( position >= $(".About").offset().top && position < ($(".About").offset().top + $(".About").height()) ) {
			navAbout.removeClass("navRegular").addClass("navHighlight");
		} else {
			navAbout.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $(".Artwork").offset().top && position < ($(".Artwork").offset().top + $(".Artwork").height() + $(".ArtInfo").height()) ) {
			navArtwork.removeClass("navRegular").addClass("navHighlight");
		} else {
			navArtwork.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $(".Music").offset().top && position < ($(".Music").offset().top + $(".Music").height()) ) {
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else {
			navMusic.removeClass("navHighlight").addClass("navRegular");
		}

		if(position + $(window).height() == $(document).height()){
			navArtwork.removeClass("navHighlight").addClass("navRegular");
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else {
			navMusic.removeClass("navHighlight").addClass("navRegular");
		}


	});

});

$(document).ready(function() {

	$("#modalButton").on("click", function(e) {

		e.preventDefault();

		var modal = $("#modal");

		modal.removeClass("hiddenModal").addClass("displayedModal");

	});

});


$(document).ready(function() {

	$("#closeModal").on("click", function(e) {

		e.preventDefault();

		var modal = $("#modal");

		modal.removeClass("displayedModal").addClass("hiddenModal");

	});

});







//REFERENCES
//https://www.youtube.com/watch?v=Qxj3o43jE30 (video I used in <video> tag)
//http://sass-lang.com/guide
//http://www.w3schools.com/howto/howto_css_modals.asp
//http://www.webdesignerdepot.com/2012/10/creating-a-modal-window-with-html5-and-css3/
//http://www.w3schools.com/default.asp 
//http://callmenick.com/post/jquery-functions-javascript-equivalents
//http://callmenick.com/post/animated-resizing-header-on-scroll
//http://www.webdesignerdepot.com/2013/03/how-to-create-a-resizing-menu-bar/
//https://www.codecademy.com/ (old HTML, CSS, and Javascript exercises)
//https://api.jquery.com/scrollTop/
//http://www.w3schools.com/jquery/jquery_animate.asp
//http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
//http://jsfiddle.net/9SDLw/
//http://api.jquery.com/not/
//https://www.youtube.com/watch?v=64tNZ8bE4h0
//https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
//http://nicolasgallagher.com/jump-links-and-viewport-positioning/demo/
//http://www.w3schools.com/howto/howto_css_modals.asp
//http://jsfiddle.net/SO_AMK/VV2ek/
//http://www.webdesignerdepot.com/2013/04/how-to-use-css3-transitions/


