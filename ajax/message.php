<?php
$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$to  = $email;
$subject = "Сообщение с сайта BABYBOSS";
$message = '
<html>
    <head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Отзыв с сайта BABYBOSS</title>
    </head>
    <body>
        <p>А здесь ваше сообщение</p>
    </body>
</html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";

$headers .= "From: $email\r\n";
mail("alex@368action.ru", $to, $subject, $message, $headers);
?>