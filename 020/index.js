const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('test');
    }
};

options.makeTest(); //method object

const { border, bg } = options.colors; //деструктуризация 

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`свойство ${key} значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

console.log(Object.keys(options).length); //количество елементов масива

console.log(options.colors.bg); //количество елементов масива
