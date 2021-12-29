// let a = 5;
// let b = a + 5;
// console.log(a);
// console.log(b);

// const obj = {
//     a: 1,
//     b: 2
// };
// const copyObj = obj;
// copyObj.a = 3;
// console.log(obj);
// console.log(copyObj);

function copy(mainObj) { //copy object
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 4,
    c: {
        x: 5,
        c: 6,
    }
};
const newNumbers = copy(numbers);
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 22,
    f: 33,
};
console.log(Object.assign(numbers, add)); // copy object

// copy array
const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
console.log(newArr);

//spread
const video = ['yutube', 'vimeo'];
const blog = ['wordpes', 'wix'];
const internet = [...video, ...blog, 'test']; //spread operator
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 3, 4];
log(...num);

const arrr = ['a', 'b'];// add arrray
const newA = [...arrr];

const a = {
    a: 1,
    b: 2,
};
const b = { ...a }; // add object
console.log(b);
b.a = 10;
console.log(b);
