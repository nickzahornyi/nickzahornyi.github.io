$(document).ready(function (){
	var $firstName = $('#firstname');
	var $lastName = $('#lastname');
	var $address = $('#address');
	var $firstNameHelp = $('#firstname').attr('title');
	var $lastNameHelp = $('#lastname').attr('title');
	var $addressHelp = $('#address').attr('title');
	var $button = $('.button')

    $firstName.on("mouseover", function(){
       $(".firstname-help").remove();
       $(".firstname").append('<span class="firstname-help">' + $firstNameHelp + '</span>');
       $(this).removeAttr('title');
    });
    $firstName.on("mouseout", function(){
       $(".firstname-help").remove();
    });

    $lastName.on("mouseover", function(){
       $(".lastname-help").remove();
       $(".lastname").append('<span class="lastname-help">' + $lastNameHelp + '</span>');
       $(this).removeAttr('title');
    });
    $lastName.on("mouseout", function(){
       $(".lastname-help").remove();
    });

    $address.on("mouseover", function(){
       $(".address-help").remove();
       $(".address").append('<span class="address-help">' + $addressHelp + '</span>');
       $(this).removeAttr('title');
    });
    $address.on("mouseout", function(){
        $(".address-help").remove();
    });

	$button.on("click", function(){
       $(".firstname-help").remove();
       $(".lastname-help").remove();
       $(".address-help").remove()
	     $(".firstname").append('<span class="firstname-help">' + $firstNameHelp + '</span>');
       $(".lastname").append('<span class="lastname-help">' + $lastNameHelp + '</span>');
       $(".address").append('<span class="address-help">' + $addressHelp + '</span>');
	    });
	})