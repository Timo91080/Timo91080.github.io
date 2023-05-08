<?php
session_start();

function verifier($email, $password) : array
{
    foreach($_SESSION as $value) // c'est pour affcicher un tableau
    {
        foreach($value as $personne)
        {
            if ($email == $personne['email'] && $password == $personne['password']) {
                return $personne;
            }
        }
    }
    return [];
}
?>