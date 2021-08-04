<?php
$miamail = "diija.develop@gmail.com";
$success = $_POST['success'];
$contact_name = $_POST['contact_name'];
$contact_email = $_POST['contact_email'];
$contact_request = $_POST['contact_request'];
$messaggio = "Nome: " . $nome . "\nEmail: " . $email . "\nMessaggio: " . $msg;
$headers = "From: " . $miamail . "\r\n" . "Reply-To: " . $miamail;
mail($miamail,"Messaggio dal sito",$messaggio,$headers);
header("location: " . $success);
?>
