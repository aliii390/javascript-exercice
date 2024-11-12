//  Objectif : Manipuler les chaînes de caractères et compter des éléments.
// Dans une constante, stockez un mot.
// La suite de votre algo va compter et afficher le nombre de voyelles dans le mot (a, e, i, o, u).


let mot = "salut";


function compterNbVoyelles(mot) {
    let nbVoyelles = 0;
    for (i = 0; i < mot.length; i++) {
        let lettre = mot[i].toLowerCase();
        if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre ==="o") || (lettre === "u")) {
            nbVoyelles ++;
        }
    }
    return nbVoyelles;
}
 
console.log("le nombre de voyelles est : " + compterNbVoyelles(mot));


