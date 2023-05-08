<?php

Class Restaurants {

private $nom;
private $adresse;
private $numerotel;
private $numerosiret;

public function __construct(string $nom, string $adresse,int $numerotel, int $numerosiret ) {

    $this->nom=$nom;
    $this->adresse=$adresse;
    $this->numerotel=$numerotel;
    $this->numerosiret=$numerosiret;
}

public function getNom(){

    return $nom ;
}

public function setNom(string $nom){

    $this->nom = $nom;

}

public function getAdresse(){

    return $adresse;
}

public function setAdresse(string $adresse){

    $this->adresse = $adresse;

}

public function getNumerotel(){

    return $numerotel ;
}

public function setNumerotel(string $numerotel){

    $this->numerotel= $numerotel;

}

public function getNumerosiret(){

    return $numerosiret;
}

public function setNumerosiret(string $numerosiret){

    $this->numerosiret = $numerosiret;

}

{
    return '<br> - id : '.$this->id.'<br> - '.' nom : '.$this->nom.'<br> - '.' addresse : '.$this->addresse.'<br> - '. 'numtel : '.$this->numtel.'<br> - '. 'numSIRET : '.$this->numSIRET.'<br>';  
}

}