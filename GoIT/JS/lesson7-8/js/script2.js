$(document).ready(function (){
	var $firstName = $('#firstname');
	var $lastName = $('#lastname');
	var $address = $('#address');
	var $firstNameHelp = $('.firstname');
	var $lastNameHelp = $('.lastname');
	var $addressHelp = $('.address');
	var $help = $('.help');
	var $button = $('.button')

    $firstName.on("mouseover", function(){
       $firstNameHelp.addClass("show");
    });
    $firstName.on("mouseout", function(){
       $firstNameHelp.removeClass("show");
    });

    $lastName.on("mouseover", function(){
       $lastNameHelp.addClass("show");
    });
    $lastName.on("mouseout", function(){
       $lastNameHelp.removeClass("show");
    });

    $address.on("mouseover", function(){
       $addressHelp.addClass("show");
    });
    $address.on("mouseout", function(){
       $addressHelp.removeClass("show");
    });

	$button.on("click", function(){
	    $help.addClass("show");   
	    });
	})