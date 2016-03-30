(function($){
	$.fn.fancybox = function(){
		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;

		function showModal(e) {
			$link = $(this);
			var href = $link.attr('href');

//			$modal = $('<div class="fancybox-modal"  animated zoomIn" style = "background: url('+ href +') center no-repeat; background-size: cover"></div>');

			$modal = $('<div class="modal-wrap"><div class="fancybox-modal"><img src="' + href + '"></div><div>');
			$overlay = $('<div class="fancybox-overlay"></div>');


			$overlay = $('<div class="fancybox-overlay"></div>');

			e.stopPropagation();
			e.preventDefault();

			$body.append($overlay);
			$body.append($modal);
			$overlay.one('click', hideModal);
			$modal.one('click', hideModal);
		}

		function hideModal() {
			$modal.hide();
			$overlay.hide();
		}


		//		$link.on('click', showModal);
		$('body').on('click', '.fancybox', showModal);


		return this;
	}

})(jQuery);
