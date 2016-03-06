(function($) {
    $.fn.carousel = function(e) {
        
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
     
        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
     
        leftUIEl.click(function(e) {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }   
        });
     
        rightUIEl.click(function(e) {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }  
        });

};
 
})(jQuery);