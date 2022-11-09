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
console.log(newA);

const a = {
    a: 1,
    b: 2,
};
const b = { ...a }; // add object
console.log(b);
b.a = 10;
console.log(b);



function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    

    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
      for (let j = 0; j < n; j++) {
        
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      
      // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
      
    }
    
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);

  console.log(matrix);


  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 2)
console.log(arr);
arr.splice(3, 2)

// Only change code above this line
console.log(arr);
  