(function($) {
	$.fn.noConfigCarousel = function(){
	    return this.each(function() {
	        var $this = $(this);
	        var images = $this.data('images');
	        var number_of_images = images.length;
	        var counter = 1;
	        

			var imageEl = $("<img>", {src: images[0], id: "slideBackImageObject"});
			imageEl.appendTo($this);
		
	        setInterval(function() {
	            if (counter >= number_of_images-1) { counter = 0; }
                $this.children("img:first").attr('src', images[counter]).fadeIn(400); 
	            counter++;
	        },5000);    
	    })
	}
}(jQuery));
