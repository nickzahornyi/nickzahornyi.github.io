$.ajax({
  url: "https://raw.githubusercontent.com/nickzahornyi/test/master/data.json",
  dataType: "json",
  success: function (data){
    console.log(data);
    for (var i = 0; i < data.articles.length; i++) {
      $(".nav ol").append("<li><a href='#'>" + data.articles[i].title + "</a></li>")
    }
    $(".nav a").click(function (e) {
      e.preventDefault();
      for (var j = 0; j < data.articles.length; j++) {
        if( $(this).text() === data.articles[j].title ){
          $(".articles").empty();
          $(".articles").append("<h2>" + data.articles[j].title +" </h2><p>" + data.articles[j].desc + "</p>")
          break;
        }
      }
    })
  }
});
