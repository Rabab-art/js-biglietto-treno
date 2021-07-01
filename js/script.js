// Sulla base di queste informazioni dovrà calcolare
// il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va stampato in forma umana 
//     (con massimo due decimali, per indicare centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca.

// INSERIAMO COSTO DEL BIGLIETTO IN BASE AL KM

// var price = document.getElementById(cost - km)



var age = prompt("Inserisci la tua età");
console.log('age');
var km = prompt('Quanti km farai');

var prezzoTicket = km * 0.21;

var elementoTicket = document.getElementById('prezzo-ticket');

elementoTicket.innerText = 'Il prezzo del tuo ticket è:' + prezzoTicket;

var x = 18;
var y = 65;





