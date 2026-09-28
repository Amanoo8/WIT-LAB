<?php

$num = 7;
$count = 0;

for ($i = 1; $i <= $num; $i++) {
    if ($num % $i == 0) {
        $count++;
    }
}

if ($count == 2) {
    echo "$num is a prime number";
} else {
    echo "$num is not a prime number";
}

?>