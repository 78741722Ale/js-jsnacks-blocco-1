/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// prima parola richiesta
const firstWord = prompt("Inserisci la prima parola");
// seconda parola richiesta
const secondWord = prompt("Inserisci la seconda parola");
console.log(firstWord , secondWord);

// verifica lunghezza delle parole
// stampa prima quella più lunga, poi quella più corta
if (firstWord.length > secondWord.length) {
    console.log(firstWord , secondWord);
} else if (firstWord.length < secondWord.length) {
    console.log(secondWord, firstWord);
} else if (firstWord.length === secondWord.length) {
    console.log("sono lunghe uguali");
}


