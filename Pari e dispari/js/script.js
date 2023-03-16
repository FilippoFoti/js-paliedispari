// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo all'utente di scegliere pari o dispari
let userOddOrEven;
do {
    userOddOrEven = prompt("Ciao, cosa scegli, pari o dispari?").toLowerCase();
} while (userOddOrEven !== "pari" && userOddOrEven !== "dispari")
console.log(`Hai scelto ${userOddOrEven}`);


// Chiedo all'utente di inserire un numero da 1 a 5
let userNumber;
do {
    userNumber = parseInt (prompt("Adesso dimmi un numero da 1 a 5"));
} while (userNumber < 1 || userNumber > 5)
console.log(`Hai scelto il numero ${userNumber}`);

// Numero del computer
const rndNumber = rndPcNumber (1, 5);
console.log(`Il computer ha scelto il numero ${rndNumber}`)

// Genero un numero random per il PC
function rndPcNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sommo il numero dell'utente e quello del PC
let total;

total = userNumber + rndNumber;
console.log(total)
total = isOddOrEven(total);
console.log(total)

// Pari o dispari?
function isOddOrEven(total) {
    if (total % 2 ===0) {
        return "pari"
    } else {
        return "dispari"
    }
}

if (total === userOddOrEven) {
    alert("Hai vinto!!")
    console.log("Hai vinto!!")
} else {
    alert("Hai perso!")
    console.log("Hai perso!")
}