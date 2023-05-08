<?php
$fullname = "Timo";
$age = 17;
echo "<h2> les variables </h2> <br>";
echo"Bonjour $fullname et bienvenue sur le site !";

if ($age >= 18) {
    
    echo"Vous êtes autorisé(e) à accéder au site" ;
}// bon la première partie je pense que ya rien a expliquer//
elseif ($age< 18) {
    echo "<h2> les conditions </h2> <br>";
    echo" Etes-vous majeur <br>" ;
}

else {
    echo "accès refusé";
}




$isEnabled = true;
$isOwner = false;
$isAdmin = true;


if (($isEnabled && $isOwner) || $isAdmin) { // la sa veut dire si enabled et is owner ou is admin est vrai//
    echo "<h2> les conditions pour un cas booléen </h2> <br>";
    echo 'Accès à la recette validé ✅'.'<br>';
} else {
    echo 'Accès à la recette interdit ! ❌';
}

$grade = 10;
echo "<h2> les switch </h2> <br>";

switch ($grade)  
{ 
    
    case 0: // dans le cas où $grade vaut 0
        echo "Tu es vraiment un gros nul !!!";
    break;
    
    case 5: // dans le cas où $grade vaut 5
        echo "Tu es très mauvais";
    break;
    
    case 7: // dans le cas où $grade vaut 7
        echo "Tu es mauvais";
    break;
    
    case 10: // etc. etc.
        echo "Tu as pile poil la moyenne, c'est un peu juste…";
    break;
    
    case 12:
        echo "Tu es assez bon";
    break;
    
    case 16:
        echo "Tu te débrouilles très bien !";
    break;
    
    case 20:
        echo "Excellent travail, c'est parfait !";
    break;
    
    default:
        echo "Désolé, je n'ai pas de message à afficher pour cette note";
}

//les Tableau 


$mickael = ['Mickaël Andrieu', 'mickael.andrieu@exemple.com', 'S3cr3t', 34];
$mathieu = ['Mathieu Nebra', 'mathieu.nebra@exemple.com', 'devine', 33];
$laurene = ['Laurène Castor', 'laurene.castor@exemple.com', 'P4ssw0rD', 28];

$users = [$mickael, $mathieu, $laurene];

echo"<h2> les tableaux </h2> <br/>";
echo $users[1][1]; // "mathieu.nebra@exemple.com"


//Les Boucles

$lines = 1;
echo"<h2> la boucle while </h2> <br/>";

while ($lines <= 20) {
    echo 'Je ne dois pas regarder les mouches voler quand j\'apprends le PHP.<br />';
    $lines++; // sa veut dire ajouter +1//
}


echo"<h2> la boucle for </h2> <br/>";
for ($lines = 0; $lines <= 2; $lines++)
{
    echo $users[$lines][0] . ' ' . $users[$lines][1] . '<br />';
}




//les tableaux numéroté//

// La fonction array permet aussi de créer un array
$users = array('Cassoulet', 'Couscous', 'Escalope Milanaise');

$recipes[0] = 'Cassoulet';
$recipes[1] = 'Couscous';
$recipes[2] = 'Escalope Milanaise';
echo"<h2> les tableaux numéroté </h2> <br/>";

echo $recipes[0].'<br/>'; // Cela affichera : Couscous

echo $recipes[1].'<br/>'; 

echo $recipes[2].'<br/>'; 




// Une bien meilleure façon de stocker une recette !
//Les tableaux associatifs//
$recipe = [
    'title' => 'Cassoulet',
    'recipe' => 'Etape 1 : des flageolets, Etape 2 : ...',
    'author' => 'john.doe@exemple.com',
    'enabled' => true,
];

$recipe['title'] = 'Cassoulet';
$recipe['recipe'] = 'Etape 1 : des flageolets, Etape 2 : ...';
$recipe['author'] = 'john.doe@exemple.com';
$recipe['enable'] = true;
echo"<h2> les tableaux associatfs </h2> <br/>";

echo $recipe['title'].'<br/>';
echo $recipe['recipe'].'<br/>';
echo $recipe['author'].'<br/>';
echo $recipe['enable'].'<br/>';


// AVEC FOREACH//
$recipes = [
    ['Cassoulet','[...]','mickael.andrieu@exemple.com',true,],
    ['Couscous','[...]','mickael.andrieu@exemple.com',false,],

];

echo"<h2> les tableaux numérotées avec foreach</h2> <br/>";

foreach ($recipes as $r) { //en gros foreach fait en sorte que $recipes transfert tout a $r et an faisant sa on a juste a ecrie la premiere valeur et foreach fait tout//
    echo $r[0].'<br/>'; // Affichera Cassoulet, puis Couscous
}
//meme chose pour les tableaux assiociatifs//
$recipe = [
    'title' => 'Cassoulet',
    'recipe' => 'Etape 1 : des flageolets, Etape 2 : ...',
    'author' => 'mickael.andrieu@exemple.com',
    'enabled' => true,
];

echo"<h2> les tableaux numérotées avec foreach</h2> <br/>";

foreach ($recipe as $value) {
    echo $value.'<br/>';
}


$recipes = [
    [
        'title' => 'Cassoulet',
        'recipe' => '',
        'author' => 'mickael.andrieu@exemple.com',
        'is_enabled' => true,
    ],
    [
        'title' => 'Couscous',
        'recipe' => '',
        'author' => 'mickael.andrieu@exemple.com',
        'is_enabled' => false,
    ],
    [
        'title' => 'Escalope milanaise',
        'recipe' => '',
        'author' => 'mathieu.nebra@exemple.com',
        'is_enabled' => true,
    ],
    [
        'title' => 'Salade Romaine',
        'recipe' => '',
        'author' => 'laurene.castor@exemple.com',
        'is_enabled' => false,
    ],
];

foreach($recipes as $recipe) {
    echo $recipe['title'] . ' contribué(e) par : ' . $recipe['author'] .'<br/>'; 
}

//Vérifier si la clé existe dans le tableau uniquements pour les tableaux associatifs//
$recipe = [
    'title' => 'Salade Romaine',
    'recipe' => 'Etape 1 : Lavez la salade ; Etape 2 : euh ...',
    
];
echo"<h2> trouver la clé </h2> <br/>";

if (array_key_exists('title', $recipe))
{
    echo 'La clé "title" se trouve dans la recette !'.'<br/>';
}


//Trouver la valeur qui existe en gros celui la c'est pour les tableaux numérotés //
$users = [
    'Mathieu Nebra',
    'Mickaël Andrieu',
    'Laurène Castor',
];
echo"<h2> trouver la valeur </h2> <br/>";

if (in_array('Mathieu Nebra', $users))
{
    echo 'Mathieu fait bien partie des utilisateurs enregistrés !';
}

if (in_array('Arlette Chabot', $users))
{
    echo 'Arlette fait bien partie des utilisateurs enregistrés !';
}





//Récupérer la clé d'une valeur dans le tableau en gros c'est la position quoi rien de plus//
$users = [
    'Mathieu Nebra',
    'Mickaël Andrieu',
    'Laurène Castor',
];
echo"<h2> trouver la position  </h2> <br/>";


$positionMathieu = array_search('Mathieu Nebra', $users); 
echo '"Mathieu" se trouve en position ' . $positionMathieu.'<br/>' ;

$positionLaurène = array_search('Laurène Castor', $users);
echo '"Laurène" se trouve en position ' . $positionLaurène.'<br/>'  ;

//Les Fonctions //
//alors cette fonction strlen nous permet de calculer la longueur d'une chaine de caractère//
$recipe = 'Etape 1 : des flageolets ! Etape 2 : de la saucisse toulousaine';
$length = strlen($recipe);

echo "<h2> les Fonctions </h2> <br/>";
 
 
echo 'La phrase ci-dessous comporte ' . $length . ' caractères :' . $recipe.'<br/>';



$recipe = [
    'title' => 'Salade Romaine',
    'recipe' => 'Etape 1 : Lavez la salade ; Etape 2 : euh ...',
    'author' => 'laurene.castor@exemple.com',
    'creator' => 'Timo',
];

echo sprintf( //Cette fonction sert a formater une chaine de caractère en gros c'est un raccourci de echo en ajoutant les valeur du tableau $recipe rapidement//
    '%s par %s : %s  deuxième createur %s <br/>',
    $recipe['title'],
    $recipe['author'],
    $recipe['recipe'],
    $recipe['creator'],
);


// Enregistrons les informations de date dans des variables

$day = date('d');  //Pour la fonction date jpense ya pas trop besoind d'explications hyn//
$month = date('m');
$year = date('Y');
























































<div class="0">



00
</div>
$hour = date('H');
$minut = date('i');

// Maintenant on peut afficher ce qu'on a recueilli
echo 'Bonjour ! Nous sommes le ' . $day . '/' . $month . '/' . $year . 'et il est ' . $hour. ' h ' . $minut." <br/>";


$recipe = [
    'title' => 'Salade Romaine',
    'recipe' => 'Etape 1 : Lavez la salade ; Etape 2 : euh ...',
    'author' => 'laurene.castor@exemple.com',
    'is_enabled' => true,
];


// Ok Ok la c'est du serieux en gros ce qu'on a fait la c'est créer une fonction//
//La fonction s'appelle isValidRecip//
//l'utilité de la fonction est le code si dessous//
function isValidRecipe(array $recipe) : bool
{
if ($recipe['is_enabled']) {
    return true;

} else {
    return false;
}

}

//Fonction isvaliderecipe
$romanSalad = [
    'title' => 'Salade Romaine',
    'recipe' => 'Etape 1 : Lavez la salade ; Etape 2 : euh ...',
    'author' => 'laurene.castor@exemple.com',
    'is_enabled' => true,
];



// Répond true !
$isRomandSaladValid = isValidRecipe($romanSalad); //En gros on a mis qle resultar de la focntion dans la variable $isRomandSaladValid//


?>