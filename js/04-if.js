/*
IF - salygos sakinys
uzklausos klausimas atsako i True or False
pagylinimo operatoriai 
visi >,<,==,!=,<=,=>,===,!==.
nenaudoti: ==, !=.
naudoti: >,<,<=,>=,===,!== 
Sablonai
if() {}
if() {} else {}
if() {} else if {}.....else if {}
if() {} else {}....{}

viena = yra priskirimas
jeigu == yra sulyginimas.
! yra reikesme ne

*/


const a = 33;
const b = 7;

if (a < b){
    console.log('A yra daugiau uz B');}
    else{
        console.log('A nera maziau uz B');
    }
    if(4 == 4){
        console.log('abu yra lygus');
    }
if(5 != 8){
    console.log('penki nelygu astuonems')
} else {
    console('vis gi yra lygu');
}

if (11 >= 11.001) {
    console.log('daugiau arba lygu')
} else {
    console.log('nera nei daugiau nei lygu')
}

const astuoniolikaNumber = 18;
const astuoniolikaString = '18';

if (astuoniolikaNumber == astuoniolikaString){
    console.log('Taip');
} else {
    console.log('ne');
}

const falseBoolean = false;
const falseString = '';
const falseNumber = 0;

if (falseBoolean == falseString){
    console.log('hello');
} else {
    console.log('cya');
}
if (falseBoolean == falseNumber){
    console.log('hello');
} else {
    console.log('cya');
}
if (falseString == falseNumber){
    console.log('hello');
} else {
    console.log('cya');
}

const akys = 'Zalios';

if(akys === 'melynos'){
    console.log('akys yra melynos');
} else if(akys === "zalios"){
    console.log('akys yra zalios')
}  else if(akys === "rudos"){
    console.log('akys yra rudos');
}
    else if(akys === "raudonos"){
        console.log('akys yra programerio')}
   else  {
    console.log('neatpazinta akiu spalva');
}

const parosMetas = 'diena';

if(parosMetas === 'rytas') {
    console.log('Dabar yra rytas');
} else {
    console.log('Neatpazintas paros metas');
}