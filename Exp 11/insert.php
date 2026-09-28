<?php

include "db.php";

$name = $_POST["name"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];

$sql = "INSERT INTO users (name, email, mobile)
        VALUES ('$name', '$email', '$mobile')";

if ($conn->query($sql) === TRUE) {
    echo "User information saved successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>