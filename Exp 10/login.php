<?php

$data = file_get_contents("users.txt");

$stored = explode(" ", trim($data));

$correct_username = $stored[0];
$correct_password = $stored[1];

$username = $_POST["username"];
$password = $_POST["password"];

if ($username == $correct_username && $password == $correct_password) {
    echo "Login Successful";
} else {
    echo "Invalid Username or Password";
}

?>