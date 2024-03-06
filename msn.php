<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $ocupacion = $_POST["ocupacion"];
    $mensaje = $_POST["mensaje"];

    // Dirección de correo a la que se enviará el mensaje
    $destinatario = "raquellore@gmail.com";

    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto de $nombre";

    // Contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo Electrónico: $email\n";
    $contenido .= "Ocupación: $ocupacion\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Cabeceras adicionales
    $headers = "From: $email";

    // Intenta enviar el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        // Éxito al enviar el correo
        header("Location: confirmacion.html");
        exit();
    } else {
        // Error al enviar el correo
        $error_message = "Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.";
    }
}

?>