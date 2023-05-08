<?php

Class Clients{

private $nom ;
private $nbr_perso;
private $date_reservation; 
private $menu ;
private $plat ;
private $prixtotale;
private $addition

public function __construct(string $nom, int $nbr_perso, datetime $date_reservation)
{

    $this->nom = $nom;
    $this->nbr_perso = $nbr_perso;
    $this->$date_reservation= $date_reservation;
    $this->$menu =[];
    $this->$plat =[];

}
 
public function  ajoutplats($plat,$unplat) {
      $this->$plat [] = $unplat;
}


public function ajoutMenu($menu, $unmenu){

    $this->$menu [] = $unmenu;
}

public function addition(){

foreach($this->plat as $unplat) {
    
    $this->prix= $this->prix + $unplat->getprix();
}

foreach($this->menu as $unmenu) {

   $this->prix = $this->prix + $unmenu->getprixTotal() ;

}

return $this->prix ;



}



public function getnom(){

    return $nom;

}

public function setnom(string $nom){
  
    $this->nom=$nom;
}


public function getNbrPersonne()
{
    return $nbrPersonne;
}


public function setNbrPersonne(int $nbrPersonne)
{
    $this->nbrPersonne = $nbrPersonne;

   
}


public function getDateReservation()
{
    return $dateReservation;
}


public function setDateReservation(datetime $dateReservation)
{
    $this->dateReservation = $dateReservation;

   
}

public function getMenu()
{    
    return $menu;
}




}

?>