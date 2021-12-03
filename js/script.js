// alert ('ciao');
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// primo step 
// creare un array di 5 numeri casuali da visualizzare in pagina 
// creiamo una funzione per generare numeri casuali  
function getRndInteger(lenght, min, max) {
    let randomNumbers = [];
    for (let index = 0; index < lenght; index++) {
        const number =Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(number);
    }
    return randomNumbers;
}
let rNumbers = getRndInteger(5,1,100);
console.log(rNumbers);
// stampiamo in pagina i numeri ottenuti
// selezioniamo l'elemento dove andremo a visualizzare i numeri 
const container = document.getElementById('container');
// console.log(container);
container.append(rNumbers);
// facciamo sparire i numeri dalla pagina dopo un tot di tempo 
function displayNone() {
    container.classList.add('d-none');   
}
setTimeout(displayNone, 5000);
// creare un timer di 30 secondi
let count = 30;
let counter = setInterval(() => {
    console.log(count);
        count -= 1;
        if (count <= 0) {
            clearInterval(counter);
        }   
    }, 1000); 
// Chiediamo all'utente tante volte quanto sono i numeri scritti in pagina
let userNumber=[];
for (let index = 0; index < rNumbers.length; index++) {
    let numbers = parseInt(prompt('inserisci il numero che ricordi'));
    userNumber.push(numbers);
}
console.log(userNumber);
// confrontiamo i numeri inseriti dall'utente con i numeri che abbiamo generato casualmente
if (userNumber == rNumbers) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}