// Menu

$(document).ready(function(){
  var $menu = $('.menu');
  var $secondMenu = $('.menu_2');
  var $thirdMenu = $('.menu_3');
  var $showMenu = $('.dropdown');
  var $showSubMenu = $('.dropdown-sub');

  $showMenu.on('mouseover', function() {
      $(".menu_2").stop().show(200);
  });
  $showMenu.on('mouseleave', function() {
       $(".menu_2").hide(300);
  });

  $showSubMenu.on('mouseover', function() {
      $(".menu_3").stop().show(200);
  });
  $showSubMenu.on('mouseleave', function() {
      $(".menu_3").hide(300);
  });

// Carrousel
  $(function() {
    $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
            // Автопрокрутка слайдера
            $('.jcarousel').jcarouselAutoscroll({
                interval: 3000,
                target: '+=1',
                autostart: true
            });
    });    

// Selectbox
$('select').each(function(){
  $(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
  $(this).siblings('p').text( $(this).children('option:selected').text() );
});

// CHECKBOX

$('.jquery_checkbox input, select').styler();
});