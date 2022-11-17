'use strict'

// filter

const names = ['anna', 'oleg', 'vladimir', 'vladyslav'];
const shortNames = names.filter((name) => {
    return name.length < 5;
});
console.log(shortNames);


// map

const answers = ['ivaN', 'annA', 'PetRo'];
const resAnswers = answers.map((answ) => {
    return answ.toLowerCase();
});
console.log(resAnswers);


// every / some

const some = [4, 'sdds', 'wbdwbdwdwd'];
// const someNum = some.some(item => typeof(item) === 'number'); // some
const someNum = some.every(item => typeof (item) === 'number'); // every

console.log(someNum);

// reduce

// const arr = [3, 5, 6, 7];
// const resArr = arr.reduce((sum, current) => sum + current);
// console.log(resArr);

const arr = ['apple', 'orange'];
const resArr = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(resArr);

// ------ Practic ------

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);