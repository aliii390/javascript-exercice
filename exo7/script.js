// Objectif : Utiliser des conditions pour trier des éléments dans deux groupes.

// Crée un tableau contenant plusieurs nombres positifs et négatifs.
// Utilise une boucle pour séparer les nombres positifs et les nombres négatifs dans deux nouveaux tableaux.
// Affiche ces deux tableaux.


const chiffre  = [4, 5, 8, -4, -5, -8];

const positifs = [];

const negatif = [];

if(chiffre === positifs){
    positifs.sort(chiffre)
} 

if(chiffre === negatif){
    negatif.sort(chiffre)
}

console.log("Positif: " + positifs, "Négatif: " + negatif);