'use strict';
console.log('funcReturn.js');


// simple sum fn

// function getSum(n1,n2) {
//     let getSum = n1 + n2;
//     console.log('sum ===', getSum);
//     // nutraukiam funkcijos vugdymą
//     // ir gražinam kas yra po dešine po return
//     return getSum;
// }

//  function showAvarage() {
// let sum1 = getSum(10,20)
// let sum2 = getSum(5,10)
// let sum3 = getSum(1,15)
// const avg = (sum1 + sum2 +sum3) / 3;
// //  gauti visų sumų sumą

// console.log(sum1, sum2, sum3);
// console.log(+avg.toFixed(2));
//  }
//  showAvarage();
// //  pagrindinė aplikacijos veiksmų seka
//  function init() {
    

//     showAvarage();
//  }



//  1. parasyti funkcija multi kuri sudaugina pirma parametra su antru ir grazina

function multi(n1 = 1,n2 = 1) {
    let suma = n1 * n2;
    console.log(suma);
    return multi;
}

// 2. parasyti funkcija divide kuri padalina pirma parametra is antro ir grazina

function divide(n1,n2) {
    let dalint = n1 / n2;
    console.log(+dalint.toFixed(2));
}
// 3. parasyti funkcija avg kuri gauna 2 parametrus ir grazina ju vidurki

function avg(n1,n2) {
    let suma = n1 + n2;
    let vidurkis = suma / 2;
    console.log(+vidurkis.toFixed(2));
}

// 4. parasyti funkcija flow() kurioje sudedam visu auksiau aprasytu funkciju rezultatus ir grazinam ir ispausdinam konsoleje.  

function flow() {
    return avg(25, 32),divide(25,6),multi(2,10); 
}
flow();