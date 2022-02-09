'use strict';

// const now = new Date('2018-00-02');
const now = new Date();
// new Date.parse('2020-02-01');

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours(), now.getMinutes());
// console.log(now.getUTCHours(), now.getMinutes());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());


// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`цикл отработал за ${end - start} милисикунд`);