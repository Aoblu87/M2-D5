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

// //SECONDA VERSIONE
// function boundary(a) {

//     return  (a >= 20 && a <= 100 || a === 400)
  
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



//ULTERIORE VERSIONE

// function reverseString(a){

// let stringa=""

// for (let i = a.length-1; i>=0; i--) {

//   stringa+= a[i]

// }
//   return stringa
// }




// console.log(reverseString('cielo'))





/* ESERCIZIO 4 
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo
  maiuscola ogni lettera iniziale di ogni parola.
*/

// let stringa= 'la casa di anna'
// function upperFirst(a){
//  let array= a.split(' ')
//   let result=''
  

//   for (let i = 0; i < array.length; i++) {
// //for(const variabile of array)   VARIABILE DI CICLO FOR
// const element= array [i]

// const firstLetter= element[0].toUpperCase()
// const senzaIniziale= element.slice(1)
  
//     result+=firstLetter+senzaIniziale+' '
//   }
//   return result.slice(0, result.length-1)

 

// }

//   console.log(upperFirst(stringa))



    








/* ESERCIZIO 5 FATTO
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un
 array contenente n numeri random contenuti tra 0 e 10.
*/


// function giveMeRandomn(n){
//   const array=[]

//   for (let i = 0; i <=n; i++) {
//     array.push(Math.round(Math.random()*10))
    
//   } return array
// }

// console.log(giveMeRandomn(10))

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

//Mth.abs  differenza asssoluta


// function crazyDiff(a) {
//     const num = 19
//     let result=0
//     if (num>a){
//       result=num-a
//     }else{
//       result=(a-num)
//     }

    
//     if (result > 19) {
//         result =result* 3
//     }
    
    
//     return result
// }
// console.log(crazyDiff(5))






/* ESERCIZIO 3  DA COMPLETARE
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato,
  ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/


// let stringa = 'code casa'

// function codify(a) {
//     let aggiungi = 'code'
//     if (a[0] == 'code') {
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
//   if(a>=0&&)
//     return (a % 3 === 0) || (a % 7 === 0)

// }

// console.log(check3and7(2))






/* ESERCIZIO 5 FATTO
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro
 e la ritorna senza il primo e l'ultimo carattere.
*/


// let parola = 'palla'
// function cutString(a) {
  
//     return a.slice(1, a.length-1)

// }
// console.log(cutString(parola))

