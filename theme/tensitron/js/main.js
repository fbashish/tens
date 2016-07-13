$(document).ready(function() {
	$(".fancybox").fancybox({
		titleShow: true,
		titlePosition: 'inside'
	});
	$(".fancybox.iframe").fancybox ({
		iframe: {
		              preload: false // fixes issue with iframe and IE
		}		
	});
	$('#iconified').on('keyup', function() {
      var input = $(this);
      if(input.val().length === 0) {
          input.addClass('empty');
      } else {
          input.removeClass('empty');
      }
	});
});
