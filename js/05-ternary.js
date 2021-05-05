/*
Ternary - sutrumpintas if'as
jam yra butinos true ir false reiksmes
struktura:
klausimas? jei tiesa: jei netiesa
*/

const vartotojoAmzius = 14;
const amziusCenzas = 18;

const arIleistiISpecialiaVieta = vartotojoAmzius >= amziusCenzas ? true : false;
console.log('ar ileisti:', arIleistiISpecialiaVieta);


const amzius = 14;
const cenzas = 18;

const arVyresnis = amzius >= cenzas ? 'vyresnis' : 'ne vyresnis';
console.log('ar vyresnis:', arVyresnis);


console.log('----------');

const ats = 0 < 1 ? 2 < 3 ? 4 : 5 :6;
console.log(ats);

const boo = true ? false ? true: false : true;
console.log(boo);
