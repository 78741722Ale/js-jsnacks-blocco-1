/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/ 

/// L’utente inserisce due numeri in successione
// primo numero
const firstNumber = parseInt(prompt("Inserisci il primo numero"));

// secondo numero
const secondNumber = parseInt(prompt("Inserisci il Secondo numero"));

// console log per verificare
console.log(firstNumber, secondNumber);

if (firstNumber > secondNumber) {
    console.log("il primo numero è più alto");
} else if (firstNumber < secondNumber) {
    console.log("il secondo numero è più alto");
} else if (firstNumber == secondNumber){
    console.log("i due numeri sono uguali");
}

