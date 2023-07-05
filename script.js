/* ESERCIZIO 1  FATTO
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora 
 deve ritornare la loro somma moltiplicata per 3.
*/

// function crazySum(a, b) {
//   let result=0
//     if (a !== b) {
//         result = a + b
//     } else {
//         result = (a + b) * 3

//     }return result
// }
// console.log(crazySum(5, 5))






/* ESERCIZIO 2 FATTO
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale 
 parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

// function boundary(a) {

//     if (a >= 20 && a <= 100 || a === 400){
//       return true
//     }
//     else { return false
//     }
// }
// console.log(boundary(25))




/* ESERCIZIO 3 FATTO
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna
 invertita (es.: EPICODE => EDOCIPE).
*/
// let stringa='EPICODE'
// function reverseString(a){
// let arrayString= a.split('')

// let string1= arrayString.slice(0,4)
// string1=string1.reverse()
// let string2=arrayString.slice(4)
// string2=string2.reverse()
// console.log((string2.concat(string1)).join(''))
// }





// console.log(reverseString('cielo'))





/* ESERCIZIO 4 
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo
  maiuscola ogni lettera iniziale di ogni parola.
*/

// let stringa= 'casa'
// function upperFirst(a){
//   // let arrayString=a.split()
//   let senzaIniziale= a.slice(1)
//   return a[0].toUpperCase()+ senzaIniziale
 

// }

//   console.log(upperFirst(stringa))


// let stringa= 'casa'
// function 
// const arrayString=a.split()
// for (let i = 0; i  < arrayString.length; i++) {
//   const element = arrayString[i];

  
// }

    








/* ESERCIZIO 5 FATTO
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un
 array contenente n numeri random contenuti tra 0 e 10.
*/


function giveMeRandomn(n){
  const array=[]

  for (let i = 0; i <=n; i++) {
    array.push(Math.floor(Math.random()*(10+1)))
    
  } return array
}

console.log(giveMeRandomn(10))

//EXTRA:
/* ESERCIZIO 1  FATTO
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// function area(l1, l2) {
//     return l1 * l2

// }

// const areaRettengolo = area(5, 3)

// console.log(areaRettengolo)



/* ESERCIZIO 2 FATTO
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
// CERCARE METODO PER LA DIFFERENZA ASSOLUTA
// function crazyDiff(a) {
//     const num = 19
  
//     let result = a - 19
//     if (result >= 19) {
//         return result * 3

//     } return result
// }
// console.log(crazyDiff(30))






/* ESERCIZIO 3  FATTO
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato,
  ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/


// let stringa = 'coderotte'

// function codify(a) {
//     let aggiungi = 'code'
//     if (a[0] === 'c' && a[1] === 'o' && a[2] === 'd' && a[3] === 'e') {
//         return a

//     } else {
        
//         return aggiungi.concat(a)
//     }
// }
// console.log(codify(stringa))




/* ESERCIZIO 4 FATTO
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true;
  altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


// function check3and7(a) {
//     return (a % 3 === 0) || (a % 7 === 0)

// }

// console.log(check3and7(2))






/* ESERCIZIO 5 FATTO
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro
 e la ritorna senza il primo e l'ultimo carattere.
*/


// let parola = 'palla'
// function cutString(a) {
//     let ultimoCarattere = a.lastIndexOf()
//     return a.slice(1, ultimoCarattere)

// }
// console.log(cutString(parola))

