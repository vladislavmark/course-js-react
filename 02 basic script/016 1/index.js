function convert(amount) {
    return 28 * amount;
}
const resConvert = convert(300);
console.log(resConvert);


const discount = 0.9;
function promotion(res, discount) {
    console.log(res * discount);
}

promotion(resConvert, discount);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('end');
}
test();



const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result.push(i);
}
console.log(result);
