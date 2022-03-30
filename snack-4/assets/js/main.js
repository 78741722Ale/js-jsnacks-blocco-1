//traccia 

/* 
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

//Chiedi all’utente il suo nome completo
const userName = prompt("Inserisci il tuo nome completo");
console.log(userName);

// Array di nomi che possono entrare alla festa
// ho messo anche io per verificare nell'immediato
const allUsersName = ["Alessandro Pecorilla", "Gianni Pinotto", "Luigi Bertoli", "Carolina"];
console.log(allUsersName);

// variabile booleana di controllo, settata su false
let control = false;


// ciclo for per tutti i nomi da controllare
for (let i = 0; i < allUsersName.length; i++) {
  // verifica che il nome dichiarato dalla persona rientri dentro alla lista dell'array
  if (userName === allUsersName[i]) {
    // Il controllo è true se la userName dichiarata rientra nell'array
    control = true;
  }
}

// comunicagli se può partecipare o no alla festa.
if (control == true) {
  console.log("Il tuo nome è nella lista, puoi proseguire");
  alert("Il tuo nome è nella lista, puoi proseguire");
} else {
  console.log("Non puoi entrare, mi spiace");
  alert("Non puoi entrare, mi spiace");
}