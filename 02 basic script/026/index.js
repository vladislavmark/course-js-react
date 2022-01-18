//Динамическая типизация в JS

//  To String 

//1
console.log(typeof (String(null)));
console.log(typeof (String(4)));

//2
console.log(typeof (5 + ''));

const num = 5;
console.log('https:google.com/category/' + num);

const fontSize = 24 + 'px';
console.log(fontSize);

// To Number

//1
console.log(typeof (Number('4')));

//2
console.log(typeof (+'5'));

//3
console.log(typeof (parseInt('15px', 10)));

//4
let answr = +prompt('answer', '');

// To Boolean 
// 0, '', null, undefined, NaN -- false

//1
console.log(typeof (Boolean('7')));

//2
console.log(typeof (!!'7'));

//3
let swicher = null;
if (swicher) {
    console.log('working');
}
swicher = 1;
if (swicher) {
    console.log('working1');
}