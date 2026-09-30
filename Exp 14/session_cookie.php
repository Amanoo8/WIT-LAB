<?php

session_start();

// Set session variable
$_SESSION['username'] = "Aman";

// Set cookie for 1 hour
setcookie("user", "Aman", time() + 3600, "/");

echo "<h2>Session Management and Cookies</h2>";

echo "Session Username: " . $_SESSION['username'] . "<br><br>";

if (isset($_COOKIE['user'])) {
    echo "Cookie Value: " . $_COOKIE['user'];
} else {
    echo "Cookie has been set. Refresh the page to see its value.";
}

?>