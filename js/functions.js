'use strict';
console.log('functions.js');




// function sayHi() {
//  func body 
// }




// function sayHi(username = 'Please enter your username') {
//     console.log('----------');
//     console.log(`Hello ${username}`);
//     console.log('----------');
// }
// sayHi('James');
// sayHi('Mike');
// sayHi('Jane');
// sayHi();


// function sum(num1, num2) {
//     let suma = num1 + num2;
//     console.log(`Laba diena jūs dedate ${num1} prie ${num2} ir gaunate  ${suma}`);
// }
// sum (15, 35);
// sum (115, 325);
// sum (145, 335);


//  parašyti funkciją kuri sudaugina 3 reikšmes su išklotinė
// jei reikšmė nepaduota tai daugyba turėtų įvykti su paduotom reikšmėms

// function daugyba(num1 = 1, num2 = 1, num3 = 1) {
//     let total = num1 * num2 * num3;
//     let total2 = num1 * num2;
//     console.log(`${num1} * ${num2} * ${num3} = ${total}`);
// }

// daugyba (32,45);



//  Parašyti funkciją kuri išveda į HTML musu paduotą reikšmę

// function makeH2El (greetText = "Iveskite tekstą"){
// //  sukurti elementą
// const h2El = document.createElement('h2');
// // Pridėti reikšmę į elementą
// h2El.textContent = greetText;
// // Patalpinti elementą HTMLe 
// document.body.prepend(h2El);
// }
// makeH2El('Labukas');
// makeH2El('Sveiki');
// makeH2El('Kaip sekas');
// makeH2El();

// //  sukurti elementą
// const h2ElAntras = document.createElement('h2');
// // Pridėti reikšmę į elementą
// h2ElAntras.textContent = 'Sveiki aš esu Antras H2 elementas';
// // Patalpinti elementą HTMLe 
// document.body.prepend(h2ElAntras);


//  sukurti funkciją kuri išveda vidurkį iš gautų 3 parametrų
// ir atspausdina jį HTMLe panaudojant makeH2El (
// su išklotine
// panaudoti su keletu reikšmių 

// function vidurkisH2 (n1 = 0,n2 = 0,n3 = 0) {
//     let vidurkis = (n1 + n2 + n3) / 3;
//     let avgRounded = +vidurkis.toFixed(2);
//     const h2El = document.createElement('h2');
//     h2El.textContent = vidurkis;
//     document.body.append(h2El);
// }

// vidurkisH2(5, 8, 20);
// vidurkisH2(5, 8);



