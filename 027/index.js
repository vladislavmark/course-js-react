// Задачи с собеседований на понимание основ
//1
// let x = 5;
// alert(x++);

//2
console.log([] + false - null + true); //Nan

//3
// let y = 1; 
// let x = y = 2; 
// alert(x); 

//4
console.log([] + 1 + 2); //12

//5
alert("1"[0]); //1 додає в масив 1 і показує

//6 
console.log(2 && 1 && null && 0 && undefined);
// и - перше неправильне null
// или - перше правильне

//7
console.log(!!(1 && 2) === (1 && 2)); //!! приводить вираз до булевого типу

//8
alert(null || 2 && 3 || 4);  //3

//9
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);

//10
alert( +"Infinity" ); //виведе в числовому типі