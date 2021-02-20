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

?>