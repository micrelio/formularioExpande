var formContainer = $("#form-container");

bindFormClick();
//Opening the form
function bindFormClick() {
  $(formContainer).on("click", function (e) {
    e.preventDefault();
    toggleForm();
    //Ensure container doesn't togleForm when open
    $(this).off();
  });
}

//Closing the form
$("#form-close, .form-overlay").click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  toggleForm();
  bindFormClick();
});

function toggleForm() {
  console.log("trogle");
  $(formContainer).toggleClass("expand");
  $(formContainer).children().toggleClass("expand");
  $("body").toggleClass("show-form-overlay");
  $(".form-submitted").removeClass("form-submitted");
}

//Form validation
$("form").submit(function () {
  var form = $(this);
  form.find(".form-error").removeClass("form-error");
  // con esto hace el efecto pero no lo envia
  // var formError = false;
  console.log("1");
  form.find(".input").each(function () {
    console.log("2");

    if ($(this).val() == "") {
      console.log("if3");

      $(this).addClass("form-error");
      $(this).select();
      formError = true;
      return false;
    } else if ($(this).hasClass("email") && !isValidEmail($(this).val())) {
      console.log("else3");
      $(this).addClass("form-error");
      $(this).select();
      formError = true;
      return false;
    }
  });

  if (!formError) {
    // console.log('no error1');
    // $('body').addClass('form-submitted');
    //  $('#form-head').addClass('form-submitted');
    // setTimeout(function(){
    //   console.log('timer');
    //   $(form).trigger("reset");
    // }, 1000);
  }
  return false;
});
function isValidEmail(email) {
  console.log("email");

  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(email);
}
// social("twitter/joeharry__", "codepen/woodwork",
// "disco");
