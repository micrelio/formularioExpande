<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CodePen - Expanding Contact Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php include('./php/envio.php');
    ?>

    <link rel="stylesheet" href="./styles/style.css">
    <link rel="stylesheet" href="./font-awesome/font-awesome.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <!-- <link rel="stylesheet" href="./styles/normalize.min.css"> -->


    <link rel="stylesheet" href="./styles/googleApis.css" type="text/css">
    <script type="text/javascript" src="./font-awesome/fontawersome.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <!-- <script src="jquery.min.js"></script> -->

</head>

<body id="body">
    <div class="container">


        <!-- partial:index.partial.html -->
        <div class='form-overlay'></div>
        <div class='icon fa fa-pencil' id='form-container'>
            <span class='icon fa fa-close' id='form-close'></span>
            <div id='form-content'>
                <div id='form-head'>
                    <h1 class='pre'>Get in touch</h1>
                    <p class='pre'>Good choice...</p>
                    <h1 class='post'>Thanks!</h1>
                    <p class='post'>I'll be in touch ASAP</p>
                </div>

                <div class="">
                    <?php
                    if ($showMessage) {
                        echo !$error ? '<div class="bs-example-bg-classes"><p class="bg-success text-center">' . $message . '</p></div>' : '';
                        echo $error ? ' <div class="bs-example-bg-classes"><p class="bg-danger text-center">' . $message . '</p></div>' : '';
                    }
                    ?>

                </div>

                <form role="form" action="./php/envio.php" method="post" class="formularioContacto">
                    <input class="input name" placeholder="Nombre"  type="text" name="Nombre" />
                    <input class="input email" placeholder="Email" id="email" type="email" name="Email" />
                    <input class="input phone" placeholder="Telefono" id="phone" type="tel" name="Telefono" />
                    <textarea class="input message" rows="10" cols="40" name="comentario" id="comment"></textarea>
                    <!--pueden cambiar el lenguaje con el parametro hl-->
                    <script src='https://www.google.com/recaptcha/api.js?hl=es'></script>
                    <!--El site key de su sitio-->
                    <!-- <input class="input g-recaptcha" data-sitekey="<?php #echo $publicKey; ?>"placeholder="" id="" type="checkbox" name="" /> -->

                    <div class="input g-recaptcha" data-sitekey="<?php echo $publicKey; ?>"></div>
                    <input class='input submit' type='submit' value='Send Message'>
                    <button type="submit" class="fa fa-paper-plane "></button>
               </form>
            </div>





            <!-- <form role="form" action="" method="post" class="formularioContacto">
        <input class='input name' name='user_name' placeholder='Your name please' id="name" type='text'>
        <input class='input email' name='user_email' placeholder='A contact email' id="email" type='text'>
        <select class='input select' name='subject'>
          <option disabled=''>What shall we talk about?</option>
          <option selected=''>About a new project</option>
          <option>About a job opportunity</option>
          <option>Let's do this over a coffee</option>
        </select>
        <textarea class='input message' placeholder='How can I help?'></textarea> -->

            <!--pueden cambiar el lenguaje con el parametro hl-->
            <!-- <script src='https://www.google.com/recaptcha/api.js?hl=es'></script> -->
            <!--El site key de su sitio-->
            <!-- <div class="g-recaptcha" data-sitekey="<?php #echo $publicKey; 
                                                        ?>"></div>

                    <button type="submit" class="fa fa-paper-plane "></button>

        <input class='input submit' type='submit' value='Send Message'>
      </form> -->




            <!-- partial -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

            <script src="jquery.min.js"></script>
            <script src="script.js"></script>

</body>


</html>