// traccia
/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let somma, userNumber;
// Dichiaro il valore di sum pari a 0 
somma = 0;

// Risoluzione del problema con ciclo while

let i = 0;
while (i < 10) {
    // Richiesta ciclo
    userNumber = parseInt(prompt("Inserisci un numero"));
    // Formula 
    somma = somma + userNumber;
    // N volte da richiedere
    i++
}

// Verifica in console log
console.log(somma);