var formContainer = $("#form-container");
//para abrir con boton descomentar esta linea
// bindFormClick();
//---------------------------------------
//Opening the form
function bindFormClick() {
  console.log("ole-ole");
  $(formContainer).on("click", function (e) {
    console.log(e);
    e.preventDefault();

    toggleForm();
    //Ensure container doesn't togleForm when open
    $(this).off();
  });
}

//para abrir de boton descomentar esta fincion
open();
function open() {
  console.log("oooooooooooooooooooooo");
  $(formContainer).toggleClass("expand");
  $(formContainer).children().toggleClass("expand");
  //Ensure container doesn't togleForm when open
  $(this).off();
}
//-------------------------------

//Closing the form
$("#form-close, .form-overlay").click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  toggleForm();
  bindFormClick();
});

function toggleForm() {
  // console.log("trogle");
  $(formContainer).toggleClass("expand");
  $(formContainer).children().toggleClass("expand");
  // $("body").toggleClass("show-form-overlay");
  // $(".form-submitted").removeClass("form-submitted");
}

espera();
	function espera() {
	  $('#preloader').delay(500).fadeOut('slow', function() {
		console.log('dentro');

		 $(this).remove();
	  });
	}

// //Form validation
// $("form").submit(function () {
//   var form = $(this);
//   form.find(".form-error").removeClass("form-error");
//   // con esto hace el efecto pero no lo envia
//   var formError = false;
//   console.log("1");
//   form.find(".input").each(function () {
//     console.log("2");

//     if ($(this).val() == "") {
//       console.log("if3");

//       $(this).addClass("form-error");
//       $(this).select();
//       formError = true;
//       return false;
//     } else if ($(this).hasClass("email") && !isValidEmail($(this).val())) {
//       console.log("else3");
//       $(this).addClass("form-error");
//       $(this).select();
//       formError = true;
//       return false;
//     }
//   });

//   if (!formError) {
//     document.formulario.submit();

//     console.log('no error1');
//     $('body').addClass('form-submitted');
//      $('#form-head').addClass('form-submitted');

//     setTimeout(function(){
//       console.log('timer');
//       $(form).trigger("reset");
//     }, 1000);
//   }
//   return false;
// });
// function isValidEmail(email) {
//   console.log("email");

//   var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//   return pattern.test(email);
// }
// social("twitter/joeharry__", "codepen/woodwork",
// "disco");

//validacion mas completa pra cambiar
function validarFormulario() {
  var verificar = true;
  var expRegNombre = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
  var expRegPais = /^[a-záéíóúñ\s]*$/i;
  var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
  var expRegTelefono = /^([0-9]\s*)*$/;
  var formulario = document.getElementById("formulario");
  var nombre = document.getElementById("nombre");
  var direccion = document.getElementById("direccion");
  var pais = document.getElementById("pais");
  var email = document.getElementById("email");
  var webSite = document.getElementById("web-site");
  var telefono = document.getElementById("telefono");
  var comentario = document.getElementById("comentario");

  // var form = $(this);
  // con esto hace el efecto pero no lo envia
  console.log("1");
  // form.find(".input").each(function () {
  //   console.log("2");

  if (!nombre.value) {
    // nombre.find(".nombre-error").removeClass("nombre-error");
    // var formError = false;
    $(nombre).addClass("form-error");
    $(nombre).addClass("color-error");
    setTimeout(function () {
      alert("Escriba su nombre por favor.");
    }, 1000);
    setTimeout(function () {
      $(nombre).removeClass("form-error");
    }, 1000);
    nombre.focus();
    verificar = false;
    return false;
  }
  //PARA PONER NOMBRE Y APELLIDOS
  // else if(nombre.value.split(" ").length < 2){
  // alert("Esciba sus nombre completos por favor.");
  // nombre.focus();
  // verificar=false;
  // return false;
  // }
  // else if(!expRegNombre.exec(nombre.value)){
  // alert("Este campo admite letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
  // nombre.focus();
  // verificar=false;
  // return false;
  // }

  // else if(!direccion.value){
  // alert("Escriba su direcci\u00F3n por favor.");
  // direccion.focus();
  // verificar=false;
  // return false;
  // }

  // else if(!pais.value){
  // alert("Escriba el nombre del pa\u00EDs que nos visita por favor.");
  // pais.focus();
  // verificar=false;
  // return false;
  // }
  // else if(!expRegPais.exec(pais.value)){
  // alert("Escriba de que pa\u00EDs nos visita sin n\u00FAmeros ni caracteres especiales como [+ * , . - _ { } ...].");
  // pais.focus();
  // verificar=false;
  // return false;
  // }
  else if (!email.value) {
    $(email).addClass("form-error");
    $(email).addClass("color-error");
    setTimeout(function () {
      alert("Escriba su email por favor.");
    }, 1000);
    setTimeout(function () {
      $(email).removeClass("form-error");
    }, 1000);
    email.focus();
    verificar = false;
    return false;
  } else if (!expRegEmail.exec(email.value)) {
    $(email).addClass("form-error");
    $(email).addClass("color-error");
    setTimeout(function () {
      alert("Escriba un email valido por favor.");
    }, 1000);
    setTimeout(function () {
      $(email).removeClass("form-error");
    }, 1000);
    email.focus();
    verificar = false;
    return false;
  }
  // else if((webSite.value!="")&& !expRegUrl.exec(webSite.value)){
  // alert("Escriba un formato de sitio web valido por favor.");
  // webSite.focus();
  // verificar=false;
  // return false;
  // }
  else if (!telefono.value) {
    $(telefono).addClass("form-error");
    $(telefono).addClass("color-error");
    setTimeout(function () {
      alert("Escriba un n\u00famero de tel\u00E9fono por favor.");
    }, 1000);
    setTimeout(function () {
      $(telefono).removeClass("form-error");
    }, 1000);
    telefono.focus();
    verificar = false;
    return false;
  } else if (!expRegTelefono.exec(telefono.value)) {
    $(telefono).addClass("form-error");
    $(telefono).addClass("color-error");
    setTimeout(function () {
      alert("el campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
    }, 1000);
    setTimeout(function () {
      $(telefono).removeClass("form-error");
    }, 1000);
    telefono.focus();
    verificar = false;
    return false;
  } else if (!comentario.value) {
    $(comentario).addClass("form-error");
    $(comentario).addClass("color-error");
    setTimeout(function () {
      alert("El campo comentarios es requerido");
    }, 1000);
    setTimeout(function () {
      $(comentario).removeClass("form-error");
    }, 1000);
    comentario.focus();
    verificar = false;
    return false;
  } else if (comentario.value.length > 1000) {
    $(comentario).addClass("form-error");
    $(comentario).addClass("color-error");
    setTimeout(function () {
      alert("El campo comentarios no puede tener mas de 1000 caracteres.");
    }, 1000);
    setTimeout(function () {
      $(comentario).removeClass("form-error");
    }, 1000);
    comentario.focus();
    verificar = false;
    return false;
  }

  if (verificar == true) {
	console.log('true');

	espera();  
	  
	 
	  $("body").addClass("form-submitted");
	  $("#form-head").addClass("form-submitted");


    setTimeout(function () {
       document.formulario.submit();
    }, 10000);
    setTimeout(function () {
    //   $(form).trigger("reset");
    }, 10000);
  }
}
function limpiarFormulario() {
  document.getElementById("formulario").reset();
}
function calcular() {
  var contadorChar = (document.getElementById("contador-char").innerHTML =
    1000 - document.formulario.comentario.value.length);
}
window.onload = function () {
  console.log("pepepepepepe");
  var botonEnviar = document.getElementById("enviar");
  botonEnviar.onclick = validarFormulario;
  var botonLimpiar = document.getElementById("limpiar");
  botonLimpiar.onclick = limpiarFormulario;
};


//---Efectos pagina tienda titanium

/**
* Template Name: MyResume - v2.1.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
	"use strict";
  
	// Preloader
	$(window).on('load', function() {
	  if ($('#preloader').length) {
		$('#preloader').delay(100).fadeOut('slow', function() {
		  $(this).remove();
		});
	  }
	});
  
	// Hero typed
	if ($('.typed').length) {
	  var typed_strings = $(".typed").data('typed-items');
	  typed_strings = typed_strings.split(',')
	  new Typed('.typed', {
		strings: typed_strings,
		loop: true,
		typeSpeed: 100,
		backSpeed: 50,
		backDelay: 2000
	  });
	}
  
	// Smooth scroll for the navigation menu and links with .scrollto classes
	$(document).on('click', '.nav-menu a, .scrollto', function(e) {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		if (target.length) {
		  e.preventDefault();
  
		  var scrollto = target.offset().top;
  
		  $('html, body').animate({
			scrollTop: scrollto
		  }, 1500, 'easeInOutExpo');
  
		  if ($(this).parents('.nav-menu, .mobile-nav').length) {
			$('.nav-menu .active, .mobile-nav .active').removeClass('active');
			$(this).closest('li').addClass('active');
		  }
  
		  if ($('body').hasClass('mobile-nav-active')) {
			$('body').removeClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
		  }
		  return false;
		}
	  }
	});
  
	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function() {
	  if (window.location.hash) {
		var initial_nav = window.location.hash;
		if ($(initial_nav).length) {
		  var scrollto = $(initial_nav).offset().top;
		  $('html, body').animate({
			scrollTop: scrollto
		  }, 1500, 'easeInOutExpo');
		}
	  }
	});
  
	$(document).on('click', '.mobile-nav-toggle', function(e) {
	  $('body').toggleClass('mobile-nav-active');
	  $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
	});
  
	$(document).click(function(e) {
	  var container = $(".mobile-nav-toggle");
	  if (!container.is(e.target) && container.has(e.target).length === 0) {
		if ($('body').hasClass('mobile-nav-active')) {
		  $('body').removeClass('mobile-nav-active');
		  $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
		}
	  }
	});
  
	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, #mobile-nav');
  
	$(window).on('scroll', function() {
	  var cur_pos = $(this).scrollTop() + 300;
  
	  nav_sections.each(function() {
		var top = $(this).offset().top,
		  bottom = top + $(this).outerHeight();
  
		if (cur_pos >= top && cur_pos <= bottom) {
		  if (cur_pos <= bottom) {
			main_nav.find('li').removeClass('active');
		  }
		  main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
		}
		if (cur_pos < 200) {
		  $(".nav-menu ul:first li:first").addClass('active');
		}
	  });
	});
  
	// Back to top button
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	  } else {
		$('.back-to-top').fadeOut('slow');
	  }
	});
  
	$('.back-to-top').click(function() {
	  $('html, body').animate({
		scrollTop: 0
	  }, 1500, 'easeInOutExpo');
	  return false;
	});
  
	// jQuery counterUp
	$('[data-toggle="counter-up"]').counterUp({
	  delay: 10,
	  time: 1000
	});
  
	// Skills section
	$('.skills-content').waypoint(function() {
	  $('.progress .progress-bar').each(function() {
		$(this).css("width", $(this).attr("aria-valuenow") + '%');
	  });
	}, {
	  offset: '80%'
	});
  
	// Init AOS
	function aos_init() {
	  AOS.init({
		duration: 1000,
		once: true
	  });
	}
  
	// Porfolio isotope and filter
	$(window).on('load', function() {
	  var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-item'
	  });
  
	  $('#portfolio-flters li').on('click', function() {
		$("#portfolio-flters li").removeClass('filter-active');
		$(this).addClass('filter-active');
  
		portfolioIsotope.isotope({
		  filter: $(this).data('filter')
		});
		aos_init();
	  });
  
	  // Initiate venobox (lightbox feature used in portofilo)
	  $('.venobox').venobox({
		'share': false
	  });
  
	  // Initiate aos_init() function
	  aos_init();
  
	});
  
	// Testimonials carousel (uses the Owl Carousel library)
	$(".testimonials-carousel").owlCarousel({
	  autoplay: true,
	  dots: true,
	  loop: true,
	  items: 1
	});
  
	// Portfolio details carousel
	$(".portfolio-details-carousel").owlCarousel({
	  autoplay: true,
	  dots: true,
	  loop: true,
	  items: 1
	});
  
  })(jQuery);