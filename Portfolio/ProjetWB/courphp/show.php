<?php
include_once("function.php");
if(isset($_SET['id'] {
    $personne= getpersonne($_GET['id']);
if(!empty($personne)){
    echo 'Nom'.$personne['nom'].'<br>';
}
else echo"La personne n'existe pas";
}
?>