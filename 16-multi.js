function daugyba(skaicius1, skaicius2) {
const sandaugosReiksme = skaicius1 * skaicius2;
return sandaugosReiksme;
}
//if (typeof skaicius1 !== 'number') {
  //  return `error: pirma reiksme nera tikras skaicius`;
//}

//if (typeof skaicius2 !== 'number') {
  //  return 'error: antra reiksme nera tikras skaicius';
//}



//funcija daugyba vienas//

//validacija
//if (a nera skaiciaus tipo){
  //  return 'error: 'pirma reiksme nera tikras skaicius';
//}

//if (jeigu a yra NaN){
//return ' ERROR: antra reiksme nera skaiciaus tipo';
//}



const d1 = daugyba(8, 5);
console.log(d1);

// console.log( salyga, '->', atsakymas);


console.log(daugyba(2, 4));
console.log(daugyba(2, -4));
console.log(daugyba(-2, 4));
console.log(daugyba(-2, -4));

//galimos reiksmes Virsuje//
//negalimos reiksmes apacioje//
console.log(daugyba('labas', 3));
console.log(daugyba(false, 3));
//false yra lygus 0 visada//
console.log(daugyba(true, 3));
//true lygu sekanciai reiksmiai(tai gali buti ivairios reiksmes)


console.log(daugyba(2, Infinity));
console.log(daugyba(Infinity, 2));
