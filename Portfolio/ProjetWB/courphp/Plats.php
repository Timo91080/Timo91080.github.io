<?php 

Class Plat{

private $type ;
private $prixplat;
private $promotion;
private $ispromotion;

public function __construct(string $type, float $prixplat) {

    $this->type = $type;
    $this->prixplat = $ptix;
    $this->ispromotion = false;

}

public function getType(){

    return $type ;

}

public function setType(string $type){

    $this->type = $type;

}

public function getPrix(){

    if ($ispromotion = true){

        return $this->prixplat - $this->prixplat * (1+$this->promotion/100);
      
      
      }
    return $prixplat ;


}


public function setPrix(string $prixplat){

    $this->prixplat = $prixplat;

}


}