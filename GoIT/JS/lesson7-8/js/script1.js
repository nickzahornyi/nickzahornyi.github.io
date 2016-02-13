$(document).ready(function (){

  var $switcherLeft = $(".tabs_switcher-left");
  var $switcherCenter = $(".tabs_switcher-center");
  var $switcherRight = $(".tabs_switcher-right");

  var $tabsLeft = $(".tabs-left");
  var $tabsCenter = $(".tabs-center");
  var $tabsRight = $(".tabs-right");

   $switcherLeft.on('click', function(){
      $switcherLeft.addClass("button-in-action");
      $switcherCenter.removeClass("button-in-action");
      $switcherRight.removeClass("button-in-action");
      $tabsLeft.removeClass("tabs-hide");
      $tabsCenter.addClass("tabs-hide");
      $tabsRight.addClass("tabs-hide");

  });

  $switcherCenter.on('click', function(){
      $switcherCenter.addClass("button-in-action");
      $switcherLeft.removeClass("button-in-action");
      $switcherRight.removeClass("button-in-action");
      $tabsCenter.removeClass("tabs-hide");
      $tabsLeft.addClass("tabs-hide");
      $tabsRight.addClass("tabs-hide");
      
  });

  $switcherRight.on('click', function(){
      $switcherRight.addClass("button-in-action");
      $switcherLeft.removeClass("button-in-action");
      $switcherCenter.removeClass("button-in-action");
      $tabsRight.removeClass("tabs-hide");
      $tabsLeft.addClass("tabs-hide");
      $tabsCenter.addClass("tabs-hide");
  });

});