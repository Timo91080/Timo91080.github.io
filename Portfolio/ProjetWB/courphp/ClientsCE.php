<?php

class ClientCe extends Client
{
    private $id;
    private $nbclients;



    public function __construct(int $id , int $nbclients )
    {
        $this->id = $id;
        $this->nbclients= $nbclients;
    }
    
 


    public function getnbclients():string
    {
        return $this->nbclients;

    } 

    public function setnbclients(string $nbclients)
    {
        return $this->nbclients=$nbclients;

    }
    

  
   
    
  


    function __toString()
    {
        return '<br> - id : '.$this->id.'<br> - '.' nom : '.$this->nom.'<br> - '.' nbclients : '.$this->nbclients.'<br> - '. 'datereserv : '.$this->datereserv.'<br> - '. 'plats : '.$this->plats.'<br>';  
    }
 



}









?>
