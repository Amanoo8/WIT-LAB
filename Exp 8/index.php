<?php

function fibo($x){
    if($x==1||$x==0)return $x;
    return fibo($x-1)+fibo($x-2);
}

for($i=0;$i<10;$i++){
 echo fibo($i)," ";
}
?>