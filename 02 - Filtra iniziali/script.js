/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = prompt("inserisci una lettera:");


// Dichiara la funzione qui.
function cercaLettera (myArrey, lettera) {
    const newArray = [];
    for (let i = 0, i < myArrey.lenth,i++){
 if(myArrey[i].charAt(0).toLowerCase() === lettera.toLowerCAse()){

    newArray.push(myArrey[i]);
 }
    }
    return newArray;
}
// Invoca la funzione qui e stampa il risultato in console
const arrayFinale = cercaLettera(names, lettera);
console.log(arrayFinale);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]