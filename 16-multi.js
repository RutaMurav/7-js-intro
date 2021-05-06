function daugyba(skaicius1, skaicius2) {
const sandaugosReiksme = skaicius1 * skaicius2;
return sandaugosReiksme;
}

/*funcija daugyba vienas//

//validacija
if (a nera skaiciaus tipo){
    return 'error: '
}
*/


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



