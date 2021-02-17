<?php

/**
 * Created by PhpStorm.
 * User: juliomorales
 * Website: http://www.nworldt.net
 * Date: 21/07/16
 * Time: 11:44 PM
 */
// Incluir libreria de recaptcha de Google
require_once "recaptchalib.php";


// tu secret key
$publicKey = "6LcBgVoaAAAAAAEt7-fWXw1MomP4kWSywzYaMii5";
$secret = "6LcBgVoaAAAAAJ2nLbx3BMR7DShc077ZVSLAross";

echo "llega";

$response = null;

// comprueba la clave secreta
$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
$showMessage = false;
// Envio de Email
if ($response != null && $response->success) {
    $showMessage = true;
    // a quien se envia el email
    $to = "info@microdeveloper.es";
    // sujeto del email
    $subject = "Micrelio web";
    // quien envia el correo
    $headers = "From: web@microdeveloper.es" . "\r\n";
    // quito el valor del recaptcha
    unset($_POST["g-recaptcha-response"]);

    $body = '';
    foreach ($_POST as $key => $value) {
        $body .= "{$key}: {$value}\n";
    }
    // if (mail($to, $subject, $body, $headers)) {
    //     $error = false;
    //     echo "ENVIADO";
    //     $message = 'Enviado con exito';
    // } else {
    //     echo "ERROR1";
    //     $error = true;
    //     $message = 'Error al enviar el email';
    // }
} else {

    if ($_POST) {
        echo "ERROR2";

        $showMessage = true;
        $error = true;
        $message = 'Error al enviar el formulario intente de nuevo';
    }
}
?>