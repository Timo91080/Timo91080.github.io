<?php

Class Menu{

private $plat;
private $prixTotal;
private $reduction;
private $isreduction;

public function __contruct(int $id, string $nom, ){
$this->$id=$id;
$this->$nom=$nom;
$this->$plat= [] ;
}





public function getId()
{
return $this->id;
}


public function setId($id)
{
$this->id = $id;


}


public function getNom()
{
return $this->nom;
}


public function setNom($nom)
{
$this->nom = $nom;


}

public function getPrixTotal() : float {


    foreach ($this->plat as $unplat) {
    
    $this->prixTotal= $this->prixTotal + $unplat->getPrix(),
    
    }
    if ($ispromotion == true){

        return $this->prixTotal - $this->prixTotal * (1+$this->reduction/100);
      
      
      }
    

    return $this->prixTotal;
    }
    
    
    

}