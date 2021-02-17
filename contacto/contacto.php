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
    if (mail($to, $subject, $body, $headers)) {
        $error = false;
        $message = 'Enviado con exito';
    } else {
        $error = true;
        $message = 'Error al enviar el email';
    }
} else {
    if ($_POST) {
        $showMessage = true;
        $error = true;
        $message = 'Error al enviar el formulario intente de nuevo';
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>CONTACTO</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" href="contacto.css">

    <link rel="stylesheet" href="/src/assets/fonts/FontAwesome.otf">
    <link rel="stylesheet" href="/src/assets/fonts/fontawesome-webfont.svg">
    <link rel="stylesheet" href="/src/assets/fonts/fontawesome-webfont.ttf">
    <script type="text/javascript" src="/src/assets/fonts/fontawersome.js"></script>
</head>

<body>
    <div class="container">

        <div class="">
            <?php
                    if ($showMessage) {
                        echo !$error ? '<div class="bs-example-bg-classes"><p class="bg-success text-center">' . $message . '</p></div>' : '';
                        echo $error ? ' <div class="bs-example-bg-classes"><p class="bg-danger text-center">' . $message . '</p></div>' : '';
                    }
                    ?>

            <h2>CONTACTO</h2>
        </div>

        <form role="form" action="" method="post" class="formularioContacto">
            <div class="bloqueEntrada">
                <label for="name">Nombre:</label>
                <div>
                    <input class="name" placeholder="Nombre" id="name" type="text" name="Nombre"  />
                </div>
            </div>
            <div class="bloqueEntrada">
                <label for="email" class=" ">Email:</label>
                <div class="">
                    <input class="email" placeholder="Email" id="email" type="email" name="Email"  />
                </div>
            </div>
            <div class="bloqueEntrada">
                <label for="phone" class=" ">Telefono:</label>
                <div class="">
                    <input class="phone" placeholder="Telefono" id="phone" type="tel" name="Telefono"  />
                </div>
            </div>
            <div class="bloqueEntrada">
                <label for="comment" class=" ">Mensaje :</label>
                <div class="">
                    <textarea class="message" rows="10" cols="40"  name="comentario" id="comment"></textarea>
                </div>
            </div>
            <div class="bloqueEntrada">
                <div class="">
                    <!--pueden cambiar el lenguaje con el parametro hl-->
                    <script src='https://www.google.com/recaptcha/api.js?hl=es'></script>
                    <!--El site key de su sitio-->
                    <div class="g-recaptcha" data-sitekey="<?php echo $publicKey; ?>"></div>
                </div>
            </div>
            <div class="">
                <div class="">
                    <button type="submit" class="fa fa-paper-plane "></button>
                </div>
            </div>
        </form>
    </div>
</body>

</html>