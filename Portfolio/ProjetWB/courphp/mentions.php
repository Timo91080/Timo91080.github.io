<?php
$s1=2;
$s2=5;
$moyenne=($s1+$s2)/2;
if ($moyenne>=16){ 
echo"Admis TB";}
elseif($moyenne>=14){ 
echo "Admis B";}
elseif($moyenne>=12){
echo" Admis P";}
elseif($s1>=10||$s2>=10){
echo"Admis en passage conditionnel";}
else {echo"Ajourné";} 
?>