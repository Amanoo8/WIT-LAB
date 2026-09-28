<?php

$servername = "localhost";
$username = "root";
$password = "200810";
$database = "wit_lab";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Database connected successfully";

?>