'use strict';
// 1
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// 2
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

// 3
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello ' + this.name);
//     };
// }
// const ivan = new User('Ivan', 28);
// ivan.hello(); 

// 4
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'Jonh'
// };
// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smerch']);


// function count(num) {
//     return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


//   1 - Обычная функция: this = window, но если есть use strict - undefined
//   2 - Если используем метод внутри нашего обьекта то контекст вызова всегда будет ссылаться на  этот обьект 
//   3 - This в конструкторах и классах - это новый екземпляр обьекта 
//   4 - Ручная привязка this: call apply, bind


const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });
btn.addEventListener('click', (e) => {
    console.log(this);
    e.target.style.backgroundColor = 'red';
});
// Контекстом вызова когда используеться стандартный вид функции function(){console.log(this);} будет сам елемент на которм произошло собитие

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();
// в стрелочной функции нет своего контекста вызова он берет его в своего родителя 

const double = (a) => a * 2;
console.log(double(2));