// Objectif : Pratiquer les boucles et la manipulation des chaînes de caractères.

// Stockez une phrase dans une constante.
// Compte combien de fois chaque lettre apparaît dans la phrase.
// Affiche chaque lettre avec son nombre d’occurrences (par exemple, "a : 3 fois").


const texte = "Salut tout le monde";

const lettres = texte.replace(/\s/g, '').split('');

const dico = {};


for (let lettre of lettres) {
   
    if (dico[lettre] !== undefined) {
        dico[lettre] += 1;
    } 
    else {
        dico[lettre] = 1;
    }
}

for (let lettre in dico) {
    console.log(`${lettre} : ${dico[lettre]} fois`);
}