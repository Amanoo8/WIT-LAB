<?php

$text = $_POST["text"];

echo "You entered: " . $text;

$file = fopen("data.txt", "a");

fwrite($file, $text . "\n");

fclose($file);

echo "<br>Data stored successfully.";

?>