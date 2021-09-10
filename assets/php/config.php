<?php

$host = "127.0.0.1";
$user = "root";
$password = "";
$db = "registered_user"
$connection = new mysqli($host, $user, $password, $db);

if($connection===false){
  die("Errore di connessione" . $connection->connect_error);
}
 ?>
