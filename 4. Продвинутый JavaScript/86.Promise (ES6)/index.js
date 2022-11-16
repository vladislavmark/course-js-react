'use strict'

console.log('запит даних...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('підготовка даних...');

        const product = {
            name: 'tv',
            price: 2000
        };

        resolve(product);

    }, 2000)
});

// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'ordered';
//         console.log(product);
//         // console.log('get data');

//     }, 2000);
// });

// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });

//     req2.then((data) => {
//         console.log(data);
//     });
// });

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
            // reject()
        }, 2000);
    });
}).then((data) => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.log('error');
}).finally(() => {
    console.log('finally');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    });
}

// test(1000).then(() => {
//     console.log('1000ms');
// });
// test(2000).then(() => {
//     console.log('2000ms');
// });

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
});