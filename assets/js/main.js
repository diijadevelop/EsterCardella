(function($) {

	"use strict";

	let
 fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	let
 burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			let
 $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();


})(jQuery);





/// FORMS /////////





function verificaEmail(contact_email) {
  let
 re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(contact_email);
}

function controlloForm() {
  let contact_name = document.forms["form"]["contact_name"].value;
  let contact_email = document.forms["form"]["contact_email"].value;
  let contact_request = document.forms["form"]["content_request"].value;

  if (contact_name == "" || contact_email == "" || contact_request == "") {
    alert("I campi Nome, Email e Messaggio sono obbligatori");
    return false;
  }
  else if (verificaEmail(email) !== true) {
    alert("L'indirizzo email non sembra corretto!");
    return false;
  }else{
    return true;
  }
}
