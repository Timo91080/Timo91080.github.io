<?php
include_once('functionconnect.php')//sa sert a ramener la page functionconnect ici
if (isset($_SESSION)["email"])) AND (isset($_SESSION)["mot de passe"])) // EN gros cela signifie que sa cherche dans le formulaire si le mot email et mot de passe existe dans le formulaire
{ 
$personnes1= verifier($_POST['email'], $_POST['mdp'] // il va verifier dans ton tableaux la personne qui existe si elle exisite ou pas 
if ([empty ($personne1))//empty veut verifier si le tableaux et vide
{
    var_dump($personne);// sa m'affiche le tableau qui n'est pas destiné a etre vue par tout le monde 


}
else {
    echo"erreur"
}