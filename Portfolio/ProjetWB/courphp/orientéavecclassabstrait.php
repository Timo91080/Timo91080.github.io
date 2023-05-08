<?php

//Classe abstraites: une class abstraites est obligé d'avoir une méthodes abstrait et en gros tout ceux qui hériterons de la classe abstraites devra obligatoirement avoir la ou les methodes abstraites// 

abstract class Humain {
  public $nom;
 public $prenom;
 protected $age;

//METHODE//
public function __construct($prenom, $nom, $age)//cette fonction permet de passer des informations à l'objet au moment de sa naissance au moment ou on contruit une variable de type employé//
{//cette fonction sera appelé a chaque fois qu'on apelle new Employe dans notre cas c'est a dire 2 fois//
    $this->nom = $nom; //en gros la sa veut dire le nom de this en gros emmploye1 et 2 doit ètre égal au nom qu'on ma envoyé a $nom //
    $this->prenom = $prenom;//ect..//
    $this->age = $age; 
   
}

abstract public function Travailler();
    


public function setAge($age) 
{ //Cette fonction a pour but de recevoir donc la c'est recevoir un age et de ce dire ok bah mon age c'est l'age quon ma donné envoyé comme vous voulez//
  if(is_int($age) AND $age >= 1 AND $age <= 120 ){ //Cette fonction veut dire si l'age est un nombre entier et qu'il est supèrieur ou egal a 1 et inférieur ou égal a 120//
  $this-> age = $age;
 }
   else {
     throw new Exception("L'age doit être un entier compris entre 1 et 100");
     // Cette conditions throw veut dire qu'on veut "lancer quelque chose" donc la quon veut dans notre cas quon veut lancé une nouvelle execption en gros afiiché en message d'erreur L'age doit être blabla ect..//
   }
}  
public function getAge() { //Cette fonction a pour but quand on l'apelle de nous délivrer l'age que possède l'employé donc en gros de retourné l'age de ceci//
  return $this->age;
}

 
}

//PROPRIETE//
//CLASSE:une classe est une représentation de quelque chose par ex: employé //
class Employe extends Humain { //en gros le implements veut dire que la class employé a signé le contrat du travailleur


public function Travailler()
{
    return "Je suis un employé et je travaille";
}  

 public function presentation()
 { //en gros la fonction va te montrer un nom un prénom et un age mais la on met rien//

    var_dump("Bonjour, je suis $this->prenom $this->nom et j'ai $this->age ans");//en gros this c'est ceci donc en gros le this->prenom veut dire je vuet le prenom de ceci de l'employé quoi//
}                             //this represente l'objet dans le quel on se trouve donc quand on va faire sa: employé1 ->presentation() bah this représente l'employé1//
 }


//HERITAGE//
 class Patron extends Employe//le extends sert a herité tout le contenu de class employé
 { 

  public $voiture;// on met sa car on veut l'ajouter et il n'y ai pas dans la class employé//
 
 
 //METHODE//
 public function __construct($prenom, $nom, $age, $voiture)
 {
    parent::__construct($prenom, $nom, $age);//en gros sa sa nous sert juste a appeler le construct du "parents" on dit sa parce que c'est de l'heritage en gros de la class employé puis lieu de tout réecrire sa nous fait gagner du temps//
     $this->voiture = $voiture;//on met sa aussi puisqu'on veut l'ajouté // 
 }

 public function presentation()
 {
  var_dump("Salut, je suis $this->prenom $this->nom et j'ai $this->age ans, et j'ai une voiture ");
 }

 public function rouler(){ // on met sa aussi car on veut l'ajouter//
  var_dump("Bonjour, je roule avec une $this->voiture ");
 }

  public function Travailler()
 {
  return (" Je suis le patron et je boss aussi ");
}
 }
  
//INSTANCE//
 //OBJET: l'objet est un vériatble employé, une instance de la représentation// 
$employe1 = new Employe('Timothée', 'Dikete', 18); //en grols la l'employé 1 est un nouvelle objet issue de la class employé//
//en gros le new prend la représentation de qu'est ce qu'un employé et va crée un véritable objet  un vrai employé//
//la variable $employé1 est une instance de la class employé c'est a dire que la class employé est une idéé mais que l'employé1  est quelque chose de réelle de cette idée//
  //maintenant toute les info de la classe employé se trouve dans $employé1 ou 2//
$employe2 = new Employe('Violot', 'Thanos', 45,);

//$employe1->setAge(52); quand je met sa comme sa sa veut dire que c'etait la avant mais j'ai enlever c pour sa je laisse en commentaire au cas ou je remet//

$employe1->presentation();  //pour appeler cette focntion on doit passer par un de nos employe car elle n'existe plus elle existe que dans la class  employé//


$patron = new Patron('Vickash', 'Gers', 48,'Mclaren');
$patron->presentation();
$patron->rouler();

class Etudiant extends Humain 
 {
      
  public function Travailler()
  {
    return " Je suis un étudiant et je revise";
  }
}


 function faireTravailler(Humain $objet) // la fonction va prendre n'importe quel objet qui impléments la fonctionc Travailleur c'est a dire n'importe quel objet qui est dans une class qui a signé le contrat du travailleurs //
 {
   var_dump("Travaille en cours : {$objet->Travailler()}");// En gros la sa veut dire que on veut etre sur que l'objet a une fonction travailler c'est pour sa qu'on a mis objet->...//
 } // en gros le $objet-> Travailler va nous dire une fonction d'une class qui a implémenté travailleur c'est a dire function travailler//
 

faireTravailler($employe1);
faireTravailler($patron);