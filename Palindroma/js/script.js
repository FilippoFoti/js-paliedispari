// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.


// Chiedo all'utente di inserire una parola
const userWord = prompt("Ciao, inserisci una parola e scopri se è palindroma");

// Funzione per capire se la parola è palindroma o no
/**
 * @param {string} wordRevert
 * @return {string}
 */
function revertWord(wordRevert) {
    let revertUserWord = "";
    for (let i = wordRevert.length -1; i >= 0; i--) {
        revertUserWord += wordRevert[i];
    }
    return revertUserWord;
}

// Risposta
if (userWord === revertWord(userWord)){
    console.log("Complimenti, la tua parola è palindroma :)");
} else {
    console.log("Peccato, la tua parola non è palindroma :(");
}
