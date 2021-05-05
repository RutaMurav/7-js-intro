/*

for(a,b,c) {
    logika
}

a: kintamuju/iteratoriu iniciavimas
b: patikros, ar testi ciklas
c: kaip keisti cikla
*/

console.log('startas');

for (let i = 0; i < 5; i++){
    console.log('Labas',i);
}
console.log('end');



const marks = [10, 2, 8, 4, 6];

let sum = 0;
const count = marks.length;

for(let i=0; i < count; i++) {
  sum += marks[i];  
}

const average = sum / count;
console.log('Pazymiu vidurkis:', average);

console.log('---------------');



