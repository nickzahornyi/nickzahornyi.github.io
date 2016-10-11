$(document).ready(function () {

// tabs
$(function() {
  $('ul.workers').on('click', 'li:not(.active)', function() {
   $(this)
     .addClass('active').siblings().removeClass('active')
     .closest('div.about-container').find('div.worker-info').removeClass('active').eq($(this).index()).addClass('active');
 });
})

// anim
AOS.init();

// mob menu
$(".header__open").click(function () {
  $(".header__menu-mobile").fadeIn();
})

$(".mob-wrapper__close").click(function () {
  $(".header__menu-mobile").fadeOut();
})

})
