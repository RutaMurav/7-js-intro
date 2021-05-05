/*
Reverser string
*/

const tekstas = 'abcdef';
let reverse = '';



for(let i = tekstas.length - 1; i >= 0; i--) {
    reverse += tekstas[i];
}

console.log(tekstas, '->', reverse);