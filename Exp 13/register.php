<?php
include "db.php";

if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password)
            VALUES ('$username', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "Registration successful";
    } else {
        echo "Registration failed";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
</head>
<body>

<h2>Registration Form</h2>

<form method="post">
    Username:
    <input type="text" name="username" required>
    <br><br>

    Password:
    <input type="password" name="password" required>
    <br><br>

    <input type="submit" name="register" value="Register">
</form>

</body>
</html>