// Run after the Document DOM tree is constructed
$(document).ready(function() {  // or shorthand of $( function () { 
	// Your jQuery scripts here!
	var $el, $ps, totalHeight;

	$(".post .button").click(function() {
      
		totalHeight = 0

		$el = $(this);
		$p  = $el.parent();
		$ps = $p.find("p:not('.read-more')");
  
		// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
		$ps.each(function() {
			totalHeight += $(this).outerHeight();
		});
        
		$p
			.css({
				// Set height to prevent instant jumpdown when max height is removed
				"height": $p.height(),
				"max-height": 9999
			})
   
			.animate({
				"height": totalHeight
			});
  
		// fade out read-more
		$el.fadeOut();
  
		// prevent jump-down
		return false;
	});
});