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

// PLATE
		var img = {
			photos: [
			],
			word: [ ""
			],
			firstInit: true
		};
		var firstLoad = true;
		var searchIdeas = document.querySelector('.search__input');

		function getPic() {
				img.photos = [];

				var requestStr = 'https://pixabay.com/api/?key=2313071-14a5d1c1f2e8b590f49f3f973&q='+ img.word[0] + '&image_type=photo&per_page=50';

						function firstLoadData(data) {
								img.word = [];
								firstLoad = false;
								var i = 0;
								while(i < 7) {
									function getRandom(min, max) {
										return Math.random() * (max - min) + min;
									}
									var random = Math.round(getRandom(0, 49));
									img.photos.push(data.hits[random].webformatURL);
									img.word.push(data.hits[random].tags);
									i++;
								}
									render();
									initIsotope();
							}
							function searchData(data) {
								img.word = [];
								img.word[0] = searchIdeas.value;
								var i = 0;
								while(i < 7) {
									function getRandom(min, max) {
										return Math.random() * (max - min) + min;
									}
									random = Math.round(getRandom(0, 49));
									img.photos.push(data.hits[random].webformatURL);
									img.word.push(img.word[0]);
									i++;
								}
									render();
									initIsotope();
									searchIdeas.value = '';
							}
				var request = $.ajax({
					url: requestStr
				});
				if (firstLoad) {
					request.done(firstLoadData);
				} else {
				request.done(searchData);
				}
}
		function initIsotope() {
			var elem = document.querySelector('.activities__data');
			var isotopeInst = new Isotope( elem, {
				itemSelector: '.activities__item',
				layoutMode: 'masonry',
				transitionDuration: '1.6s',
				masonry: {
					gutter: 20
				}
			});
		}
		function render() {
			var ideasList = $('#img-tmpl').html();
			var ideasContent = tmpl(ideasList,  {
						img: img
					});
			var element = document.querySelector('.activities__data');
			element.innerHTML = ideasContent;

		}
		function firstInit() {
			getPic();
		}
		firstInit();

		$('.search__form').submit(function(e) {
			e.preventDefault();
			img.word[0] = searchIdeas.value;
			getPic();

		});

// FANCYBOX
		$('.fancybox').fancybox();
});
