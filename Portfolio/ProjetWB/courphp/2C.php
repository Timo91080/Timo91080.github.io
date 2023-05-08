<?php
echo '<h1> Exercice 1: </h1>';
$nombre1= 15;
$nombre2= 18;
$nombre3= 20;
$moyenne= ($nombre1+$nombre2+$nombre3)/3;
echo "Le nombre 1 = $nombre1 <br>";
echo "Le nombre 2 = $nombre2 <br>";
echo "Le nombre 3 = $nombre3 <br>";
echo "La moyenne =",number_format($moyenne, 2, "."),"<br>";
?>

<?php
echo '<h3> Exercice 3: </h3>';

$nombre= 4;
if ($nombre % 8) {
    echo " Le numero $nombre est bien un nombre paire";
}
else {
    echo "Le numero $nombre n\'est pas un nombre paire";
}
?>