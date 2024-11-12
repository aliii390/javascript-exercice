// Objectif : Utiliser les boucles et les manipulations de chaînes.

// Saisissez un mot.
// Affiche ce mot en inversant l'ordre des lettres (par exemple, "bonjour" deviendrait "ruojnob").




let mot = "Bonjour";
let motInverse = mot.split('').reverse().join('');
console.log(motInverse);