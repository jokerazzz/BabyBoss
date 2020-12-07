<?php
    $phone = $_REQUEST['phone'];
    
    $subject = '=?utf-8?B?'.base64_encode('Сообщение с сайта')."?=";
    
    $message = $phone;

    $success = mail('alex@368action.ru', $subject, $message);
?>
<!-- 2ой варинат отправки по HTML -->
<?php
$phone = $_REQUEST['phone'];
$to  = 'youiever.ao@gmail.com';
$subject = '=?utf-8?B?'.base64_encode('Заявка с сайта BABYBOSS')."?=";
$message = `
<html>
    <head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title> Заявка с сайта BABYBOSS </title>
    </head>
    <body>
        <a>`$phone`</a>
    </body>
</html>`;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";

$headers .= "From: <alex@368action.ru>\r\n";
mail($to, $subject, $message, $headers);
?>