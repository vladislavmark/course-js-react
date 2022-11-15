const log = function(a, b, ...rest) {
    console.log(a, b, ...rest);
}

log('1j', '2nnn', '3...', '5..');

function calcOrDouble(num, basic = 2) {
    console.log(num * basic);
}

calcOrDouble(2);