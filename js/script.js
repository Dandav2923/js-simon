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
let counter = 0;
let timeOut1 = setTimeout(function () {
    container.classList.add('d-none');
    let interval1 = setInterval(() => {
        // creare un timer di 30 secondi
        if (counter < 30) {
            counter++;
            console.log(counter);
        } else {
                clearInterval(interval1);
                let userNumber=[];
                let quantityNumbers = 0;
                let numbersRight = [];
                // Chiediamo all'utente tante volte quanto sono i numeri scritti in pagina
                for (let index = 0; index < rNumbers.length; index++) {
                    let numbers = parseInt(prompt('inserisci il numero che ricordi'));
                    userNumber.push(numbers);
                    console.log(userNumber);
                    // confrontiamo i numeri inseriti dall'utente con i numeri che abbiamo generato casualmente
                    if (rNumbers.includes(userNumber[index])) {
                        quantityNumbers++;
                        numbersRight.push(userNumber[index]);
                        // console.log(numbersRight);
                        // console.log(quantityNumbers);
                    }
                }
                // mostriamo il risultato in pagina 
                let risultato = document.getElementById('risultato');
                risultato.append(`Hai indovinato ${quantityNumbers} numeri e sono questi ${numbersRight}`);
            }
        }, 1000);
}, 5000);




