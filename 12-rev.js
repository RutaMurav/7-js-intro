/*
Reverser string
*/

const tekstas = 'abcdef';
let reverse = '';



for(let i = tekstas.length - 1; i >= 0; i--) {
    reverse += tekstas[i];
}

console.log(tekstas, '->', reverse);

// for(let i = tekstas.length - 1; i >= 0; i--) {
 //   reverse += tekstas[i];
//}
//for(let i = 0; i < tekstas.length; i++){
//    reverse = tekstas[i] + reverse;
//}
//for (let i = 0; i < tekstas.lenght - 1; i>=0;i--