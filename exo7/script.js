// Objectif : Utiliser des conditions pour trier des éléments dans deux groupes.

// Crée un tableau contenant plusieurs nombres positifs et négatifs.
// Utilise une boucle pour séparer les nombres positifs et les nombres négatifs dans deux nouveaux tableaux.
// Affiche ces deux tableaux.


const chiffre = [4, 5, 8, -4, -5, -8];

const positifs = [];
const negatif = [];

for (let i = 0; i < chiffre.length; i++) {
    if (chiffre[i] > 0) {  
        positifs.push(chiffre[i]);
    } else {  
        negatif.push(chiffre[i]);
    }
}

console.log("Positif: ", positifs);
console.log("Négatif: ", negatif);
