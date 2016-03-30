
$(document).ready(function(){
	$.support.cors = true;


    $('.jcarousel').jcarousel({
			animation: 'slow',
			wrap: 'circular'
		})
			.jcarouselAutoscroll({
			interval: 3000,
			target: '+=1',
			autostart: true
		});
		$('.arrows__prev')
			.jcarouselControl({
			target: '-=1'
		});
		$('.arrows__next')
			.jcarouselControl({
			target: '+=1'
		});


		var imgWord = '';

		function renderList(imgWord) {
			$.ajax({
				type: "GET",
				dataType: "json",
				cache: false,
				url: 'http://api.pixplorer.co.uk/image?word=' + imgWord + '&amount=7&size=m',
				success: function(data) {
					var imgData = tmpl($('#img-tmpl').html(), data);

					$('.activities__list').remove();
					$('.activities__wrapper').append(imgData);
					$('.activities__list').isotope({
						itemSelector: '.activities__item',
						layoutMode: 'masonry',
						masonry: {
							gutter: 20
						}
					});
				}
			});
		}

		$('.search__form').submit(function(e) {
			e.preventDefault();
			var imgInput = encodeURIComponent($('.search__input').val());
			renderList(imgInput);
		});

		renderList();

		$('.fancybox').fancybox();
});
