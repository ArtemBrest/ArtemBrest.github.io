<?php
class Mail
{
    private $headers;
    private $from = "progerman5.is@gmail.com";

    public function send ($sender, $subject, $message){

        // Основные заголоки
        $this->headers  = "MIME-Version: 1.0\r\n";
        $this->headers .= "Content-type: text/plain; charset=utf-8\r\n";

        // Дополнительные заголовки
        $this->headers .= "From: $sender \r\n";
        $this->headers .= "Reply-To: progerman5.is@gmail.com\r\n";
        $this->headers .= "Cc: internetsozdateli@yandex.ru\r\n";
        $this->headers .= "Bcc: internetsozdateli@yandex.ru\r\n";

        if (mail($this->from, $subject, $message, $this->headers)) {
            return 1;
        } else {
            return 0;
        }
    }
}
if (isset($_POST['phone']) && isset($_POST['name'])) {
    if(empty($_POST['phone']) || empty($_POST['name']))
    {
        echo 2;
        exit;
    }

    $subject = "Заявка с сайта";
    $email = "progerman5.is@gmail.com";
    $message = "Имя: ".(string) trim(strip_tags(htmlspecialchars($_POST['name'])))."\r\n";
    $message .= "Телефон: ".(string) trim(strip_tags(htmlspecialchars($_POST['phone'])))."\r\n";

    $sendMail = new Mail();
    echo $sendMail->send("$email", "$subject", "$message");
}
?>