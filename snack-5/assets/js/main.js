// Traccia

/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const arrayNumbers = []
console.log(arrayNumbers);  


for (let i = 0; i <= 6; i++) {
   const userNumbers = parseInt(prompt("Inserisci un numero"));
   // condizione pari o dispari
    if (userNumbers % 2 != 0) {
        const arrayNumbers = [userNumbers];
        // Pusho i numeri dispari nell'array
        arrayNumbers.push["userNumbers"];
        //loggo in console
        console.log(arrayNumbers);  
    }
}