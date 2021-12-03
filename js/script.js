// alert ('ciao');
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// primo step 
// creare un array di 5 numeri casuali da visualizzare in pagina 
let randomNumbers = [];
for (let index = 0; index < 5; index++) {
    const number = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(number);
}
console.log(randomNumbers);