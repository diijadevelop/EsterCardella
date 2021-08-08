import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4/plugins/zoom";

const $galleryContainer = document.getElementById("gallery-box");

const closeIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>cancel-circle</title>
<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
<path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
</svg>`;

$galleryContainer.addEventListener("lgInit", () => {
  const $lgCloseIcon = document.querySelector(".lg .lg-close");
  $lgCloseIcon.insertAdjacentHTML("beforeend", closeIcon);
});

lightGallery($galleryContainer, {
  speed: 500,
  plugins: [lgZoom]
});



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




function verificaEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function controlloForm() {
  var nome = document.forms["formmail"]["nome"].value;
  var email = document.forms["formmail"]["email"].value;
  var tel = document.forms["formmail"]["tel"].value;
  var msg = document.forms["formmail"]["msg"].value;

  if (nome == "" || email == "" || msg == "") {
    alert("I campi Nome, Email e Messaggio sono obbligatori!");
    return false;
  }
  else if (verificaEmail(email) !== true) {
    alert("L'indirizzo email non sembra corretto!");
    return false;
  }else{
    return true;
  }
}
