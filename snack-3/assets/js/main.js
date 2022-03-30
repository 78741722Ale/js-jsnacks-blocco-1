// traccia
/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let sum, userNumber;
// Dichiaro il valore di sum pari a 0 
sum = 0;


// Risoluzione del problema

for (let i = 0; i < 10; i++) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    sum = sum + userNumber;
}

// Verifica in console log
console.log(sum);