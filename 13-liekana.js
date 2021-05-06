/*

Keli skaiciai dalijasi be liekanos 
nurodytame inyervale imtinai
*/

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

//einame per skaicius intervale 
for(let i = nuo; i <= iki;i++){
if(i % daliklis === 0) { kiekis++;}

}
//jeigu be liekanos tai didiname kieki +1

const ats = `Skaiciu intervale tarp ${nuo} ir ${iki},besidalijanciu liekanos is ${daliklis} yra ${kiekis} vienetai`;
console.log(ats);