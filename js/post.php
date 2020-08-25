<?php
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $to = "artoym.zan@gmail.com";
    $subject = "Заявка с сайта VTI";
    $message = "<strong>Имя:</strong> $name\r\n<br>
                <strong>Телефон:</strong> $phone\r\n<br>
                <strong>Адрес:</strong> $email;
    $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
    $headers = "From: http://vti.internetsozdateli.by/ <mail@stastroi.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == "true")
    {
            echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.";
    }
    else
    {
            echo "Не удалось отправить, попробуйте снова!";
    }
    wp_die();
?>