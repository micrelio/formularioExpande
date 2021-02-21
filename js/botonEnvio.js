$(function() {
    $("#enviar").click(function() {
      $("#enviar").addClass("onclic", 250, validate);
    });
  function validate() {
      setTimeout(function() {
        $("#enviar").removeClass("onclic");
        $("#enviar").addClass("validate", 450, callback);
      }, 2250);
    }
    function callback() {
      setTimeout(function() {
        $("#enviar").removeClass("validate");
      }, 1250);
    }
  });