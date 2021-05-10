/* 
Strings
tekstine reiksme gali buti inicijuota
- vienguba kabute -
- dviguba kabute -
- backtick kabute -  

Multi-line tekstas kiekvienoje teksto 

` taipogi galima naudoti kaip iseiti kabuciu `
*/

const text1 = 'Labas rytas';
const text2 = "Labas rytas";

const kabutes21 = "Viengcubos kabutes (')";
const kabutes12 = 'Viengcubos kabutes (")';
const kabutes1 = 'Viengubos kabutes (\') ir dvigubos kabutes (").';
const kabutes2 = "Viengubos kabutes (') ir dvigubos kabutes (\").";
console.log(kabutes1);
console.log(kabutes2);

const name = 'Ruta';

function greet(greetname){
    return `Hello, ${name} how are you doing today?`;
  }
  console.log(greet);