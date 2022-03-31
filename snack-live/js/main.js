/* 
Shopping list
*/

const shopListElement = document.querySelector(".shopping")
const shopping_list = ["Pane", "Latte di Avena", "Gelato", "Pizza", "Pasta"];

// Contiamo dalla position 0 (solitamente sarebbe index/i)
let counter = 0;

while (counter < shopping_list.length) {
    // Il prodotto viene inserito nella shopping list
    const product = shopping_list[counter];
    // List Item
    const liElement = document.createElement("li");
    // Inserisco nel tag li il prodotto
    liElement.append(product)
    // inserisco nella sezione con classe .Shopping (chiamata col query selector a riga 5)
    shopListElement.append(liElement)
    // Questa è sempre la condizione, dove richiama ogni tot volte la shopping list
    counter++
}

document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault
    const newProduct = document.getElementById('product').value
    console.log(newProduct);

    const liElement = document.createElement("li");
    // Inserisco nel tag li il prodotto
    liElement.append(newProduct);
    console.log(liElement);
    shopListElement.append(liElement);

});

// Switch case - live
let fruit = "Mango"

switch (fruit) {
    // false
    case "apple":
        console.log("la mela è verde");
        break;
    // false 
    case "Fragola":
        console.log("la fragola è rossa");
        break;
    // true
    default:
        console.log("Non so di che colore è questo frutto");
        break;
}

// fruit === "Apple" /false
// fruit === "Fragola" /false

// Alternativa - multicase

const x = 20
// Se la condizione è vera
switch (true) {
    // False, X non è uguale a 10
    case x === 10:
        console.log("X è uguale di 10");
        break;
    // false , X non è minore di 5 quindi non uscira 
    case x < 5:
        console.log("X è meno di 5");
        break;
    // false , X non è = a 7    
    case x === 7:
        console.log("X è 7");
        break;
    // false , X non è = a 11  
    case x === 11:
        console.log("X è 11");
        break;
    // True, situazione di default quindi uscirà il log  
    default:
        console.log("la X è: " + x);
        break;
}