const arr = [1, 21, 3, 4, 5, 6, 8];

console.log(arr.sort(compareNum));
// arr.pop(); //delete last element
// arr.push(12); //add an element to the end

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} in ${arr}`);
// });

const str = prompt('?', '');
const products = str.split(', ');

console.log(products.sort());

console.log(products.join(';'));

function compareNum(a, b) {
    return a - b;
}

