/* 
Consegna richiesta
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

// N è un numero indicato dall’utente.
let userNumber = parseInt(prompt("Inserisci un numero:"));

/// Stampa il cubo dei primi N numeri 

// Risoluzione del problema
for (let i = 1; i <= userNumber; i++) {
    // Formula
    userCubo = Math.pow(i, 3);
    // stamp in console log
    console.log(userCubo);
}

// Alert che dichiara il valore (fuori da For senno ripete troppe volte);
alert(`il valore al cubo del tuo numero è ${userCubo}`);



