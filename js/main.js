
console.log("Hello js");
let age =37;        //let pour 1ere declaration de variable initialisation 
age = 28;           //modification de valeur 
console.log(age);       //affichage valeur variable 

//----------------------------------------------------------------------------------------------------------
if (age>= 18){
    console.log("la personne est majeure.");
}else{
    console.log("la personne est mineur");

}
//----------------------------------------------------------------------------------------------------------
let numberToGuess = 9;
let operation = "foisDeuxPlusTrois";    //choix du case pour operation

switch(operation) {
    case "plusUn" :
        numberToGuess ++;
        break;
    case "foisDeuxPlusTrois":
        numberToGuess *= 3;
        break;
    case "plusTrois":
        numberToGuess += 3;
        break;
    case "foisZero" :
        default:
            numberToGuess = 0;
            break;
}
console.log(numberToGuess);

//----------------------------------------------------------------------------------------------------------
for (let i = 0; i < 3; i++) {
    console.log("je serai une bonne developpeuse"); //affiche de 1
}

for(let i =5; i>0; i--){            //affiche de 5 à 1 en decrementant a chaque fois 
    console.log(`${i}....`);
}
console.log('bonne année');

//----------------------------------------------------------------------------------------------------------
let KAge = 12;
while(KAge < 18 ){
    console.log(`j'ai maintenant ${KAge}ans..`)
    KAge++;
}
console.log(`j'ai finalement ${KAge}ans..`)

//----------------------------------------------------------------------------------------------------------

function getNbFoisTrois(nombre){ //declaration fonction qui a ubn argument nombre en parametre
    return nombre * 3;              //l'operattion sera effectué et le resulta sera retourné par la fonction
}

console.log(getNbFoisTrois(5));
//----------------------------------------------------------------------------------------------------------

const tabNums=[10,12,0,255,25,55];   //declaration tableau de int 

const tabVide=[];       //declaration tableau vide 
//ajout valeurs au tableau vide(l'ajout se fait à la fin du tabealeau)
tabVide.push(1);
tabVide.push(2);
tabVide.push(3);
tabVide.push(4);

console.log("tabVide[1] = ",tabVide[1]); //affichage de la deuxieme valeur du tableau
tabVide[1] = "abc";                     // changement de la 2emme valeur du tableau en remplaçant par 
console.log("tabVide = ",tabVide);      //affiche apres changement 

//----------------------------------------------------------------------------------------------------------
//.join(separateur) : transforme un tableau en string, en concaténant tous les éléments dans l’ordre et en ajoutant le séparateur entre chaque élément

console.log(`tabNum.join("_|_") = ${tabNums.join("_|_")}`);


//----------------------------------------------------------------------------------------------------------
//comme un if en une seule commande , verifie si l'element est prensent (grace à .includes)et renvoie un bouléen , la derniere partie est pour l'affichage du tableau tt en 
 console.log(`l'element ${255} ${tabNums.includes(255)? "est" : "n'est pas" } 
 present dans le tableau [${tabNums}]`);

//----------------------------------------------------------------------------------------------------------
//tableau associatif contenant des paires clef/valeur avec des element tabeau a l'interieur 
let pikatchu = {
    id: 25,                         //numbeer(entier)           :identifiant unique
    name: "pikatchu",
    weightKg: 6.0,
    hpMax: 80,
    attacks: [
        {
            name:"vive-attaque",
            damages: 10,
        },
        {
            name: "Boule élek",
            damages:20,
        },
    ],
};

console.log("pikatchu = ",pikatchu);

//----------------------------------------------------------------------------------------------------------
