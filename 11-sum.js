/*
Skaiciu suma intervale (imtinai)

0 - 0  0 
0 - 4  10
0 - 100 5050
574 - 815  168069
-50 - 50   0
-70 - 30 -2020
*/

const nuo = 574;
const iki = 815;
let suma = 0;

for(let i = nuo;i <= iki; i++) {
    suma += i;
}

console.log(`Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`);
