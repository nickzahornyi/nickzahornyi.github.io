var i = 0;
var j = +prompt('Введите количество необходимых блоков');
if (j == "" || j == " ") {
    alert("Введите корректное число!");
    location.reload();
} else {
    true;
}
while (i++ < j) {
    $(".row").append('<div id="t' + i + '"><p>' + i + '</p></div>');
}
var x = 0,
    y = 0,
    i = 0;
while (i++ <= j) {
    y = Math.floor(Math.random() * 300) + 100;
}
var x = 0,
    y = 0,
    i = 0;
while (i++ <= j) {
    y = Math.floor(Math.random() * 300) + 100;
    $('#t' + i).css({
        height: y
    });
}

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
$("[id*='t']").each(function() {
    $(this).css("background-color", get_random_color());
});
