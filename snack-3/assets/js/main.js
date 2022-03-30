// traccia
/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const ListHtml = document.getElementById("list");

// il software deve chiedere per 10 volte di inserire un numero
for (let i = 0; i <= 10; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    console.log(userNumber);
    const listItem = `<li> ${userNumber} </li>`;
    // dichiarare, nell'html all'interno della lista non ordinata tutti gli item
    ListHtml.innerHTML = ListHtml.innerHTML + listItem;
}


