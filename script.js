var formContainer = $("#form-container");
// bindFormClick();
//Opening the form
function bindFormClick() {
  console.log('ole-ole');
  $(formContainer).on("click", function (e) {
    console.log(e)
       e.preventDefault();

    toggleForm();
    //Ensure container doesn't togleForm when open
    $(this).off();
  });
}
open();
function open() {
  // e.preventDefault();
  // e.preventDefault();

  // toggleForm();
  $(formContainer).toggleClass("expand");
  $(formContainer).children().toggleClass("expand");

    //Ensure container doesn't togleForm when open
    $(this).off();
}
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
function validarFormulario(){
	var verificar=true;
	var expRegNombre =/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
	var expRegPais = /^[a-záéíóúñ\s]*$/i;
	var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var expRegUrl= /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
	var expRegTelefono=/^([0-9]\s*)*$/;	
	var formulario = document.getElementById("formulario");
	var nombre = document.getElementById("nombre");
	var direccion = document.getElementById("direccion");
	var pais = document.getElementById("pais");
	var email = document.getElementById("email");
	var webSite= document.getElementById("web-site");
	var telefono = document.getElementById("telefono");
	var comentario = document.getElementById("comentario");	


  // var form = $(this);
  // con esto hace el efecto pero no lo envia
  console.log("1");
  // form.find(".input").each(function () {
  //   console.log("2");



	if(!nombre.value){
    // nombre.find(".nombre-error").removeClass("nombre-error");
    // var formError = false;

    $(nombre).addClass("form-error");
    // $(nombre).select();
    //       formError = true;
    //       return false;
    setTimeout(function(){ alert("Escriba su nombre por favor."); }, 1000);

    
	nombre.focus();
	verificar=false;
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

	else if(!email.value){
	alert("Escriba su email por favor.");
	email.focus();
	verificar=false;
	return false;
	}
	else if(!expRegEmail.exec(email.value)){
	alert("Escriba un email valido por favor.");
	email.focus();
	verificar=false;
	return false;
	}
	else if((webSite.value!="")&& !expRegUrl.exec(webSite.value)){
	alert("Escriba un formato de sitio web valido por favor.");
	webSite.focus();
	verificar=false;
	return false;
	}
	else if(!telefono.value){
	alert("Escriba un n\u00famero de tel\u00E9fono por favor.");
	telefono.focus();
	verificar=false;
	return false;
	}
	else if(!expRegTelefono.exec(telefono.value)){
	alert("el campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
	telefono.focus();
	verificar=false;
	return false;
	}
	else if(!comentario.value){
	alert("el campo comentarios es requerido");
	comentario.focus();
	verificar=false;
	return false;
	}
	else if(comentario.value.length > 1000){
	alert("El campo comentarios no puede tener mas de 1000 caracteres.");
	comentario.focus();
	verificar=false;
	return false;
	}
	
	if(verificar==true){
    $('body').addClass('form-submitted');
    $('#form-head').addClass('form-submitted');

    setTimeout(function(){
      document.formulario.submit();
      // $(form).trigger("reset");
    }, 1000);
  }
}
function limpiarFormulario(){
	document.getElementById("formulario").reset();
}
function calcular(){
	var contadorChar= document.getElementById("contador-char").innerHTML=1000 -document.formulario.comentario.value.length;
}
window.onload=function(){
  console.log('pepepepepepe');
  var botonEnviar=document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
	var botonLimpiar=document.getElementById("limpiar");
	botonLimpiar.onclick=limpiarFormulario;

}

