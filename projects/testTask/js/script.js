// collapse for mob version
$('.collapse-button').on('click', function() {
    $('.navbar-collapse').collapse('toggle');
});

// scroll
var arr = [];
var limit = 0;

$.getJSON('https://raw.githubusercontent.com/nickzahornyi/test/master/users.json', function(data) {
    var arr = data;
    $(function() {
        $(window).scroll(function() {
            var windowScroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var documentHeight = $(document).height();
            if ((windowScroll + windowHeight) == documentHeight) {
                var addData = function(arr, first) {
                    if (limit > arr.length) {
                        limit = arr.length;
                    }
                    for (i = first; i < limit; i++) {
                        var value = +arr[i].id + 4;
                        console.log(value);
                        $('.accounts')
                            .append($("<section class='account'>" +
                                "<input type='radio' name='radio' id=" + "account__radio" + value + ">" +
                                "<label for=" + "account__radio" + value + ">" +
                                "<img src='img/photo.png' alt=''>" +
                                "<h3>" + arr[i].name + " " + arr[i].surname + "</h3>" +
                                "<p>" + arr[i].desc + "</p>" +
                                "</label>" +
                                "</section>"));
                    }
                };
                var oldLim = limit;
                limit += 10;
                addData(arr.users, oldLim);
            }
        })
    })
});
