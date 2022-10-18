'use strict';
console.log('uzd.js');



// 1.parasyti funkcija kuri argumentais paima kambario sienu ilgi ploti ir auksti ir paskaiciuoja sienu plota.


// 2.padaryti kad sienu plota funkcija grazintu


// 3.paskaiciuoti triju skirtingu kambariu sienu plotus ir juos atspausdinti i html su pries tai aprasyta funkcija.

// let nums = [5, -4, 3, 10, -7, 14];
// let nums1 = [15, -41, 23, 110, -17, 14];
// // Parašyti funkciją kuri gražintų tik teigiamų skaičių masyvą
// function getPostivesArray(fullArray) {
//     const positives = [];
//     for (let num of fullArray) {
//         // jei skaičius teigiamas, dedam į positives
//         if (num > 0) {
//             positives.push(num);
//         }
//     }
//     // console.log(positives);
//     return positives;
// }

// let teigiami = getPostivesArray(nums1);
// console.log(teigiami);


// Parašyti funkciją kuri patikrina ar argumentas yra string tipo
// Jei string, tai praneša kad tai ne skaičius
// jei skaičiaus tipo kintamasis tai paverčia į valiutą 50 => 50.00 eur

 let skaicius = 500;
function makeCurrency(el) {
    // typeof
   
    if (typeof el ==='string') {
        return 'Tai ne skaičius';
    } 
    if (typeof el === 'number') {
        return `${el}.00 eur`;
    }
    return 'Nei skaičius nei stringas';
}

makeCurrency('500');