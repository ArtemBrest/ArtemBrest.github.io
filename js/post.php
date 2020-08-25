<?php
function plan_form () {
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
    mail ($to, $subject, $message, $headers);
    wp_die();
}
add_action('wp_ajax_plan_form', 'plan_form');
add_action('wp_ajax_nopriv_plan_form', 'plan_form');