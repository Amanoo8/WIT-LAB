<?php
include "db.php";

if (isset($_POST['login'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $username = strtolower($username);

    $sql = "SELECT * FROM users WHERE LOWER(username)='$username' LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {

        $user = mysqli_fetch_assoc($result);

        if (password_verify($password, $user['password'])) {
            echo "Login successful. Welcome " . $username;
        } else {
            echo "Invalid password";
        }

    } else {
        echo "User not found";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>

<body>

<h2>Login Form</h2>

<form method="post">

    Username:
    <input type="text" name="username" required>
    <br><br>

    Password:
    <input type="password" name="password" required>
    <br><br>

    <input type="submit" name="login" value="Login">

</form>

</body>
</html>