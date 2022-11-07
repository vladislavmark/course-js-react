// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 2; j++) {
//         console.log(j);
//     }
// }

let result = '';
let lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 1; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`first level ${i}`);
    for (let j = 0; j < 2; j++) {
        console.log(`second level ${j}`);
        for (let k = 0; k < 2; k++) {
            if (k === 2) continue first;
            console.log(`third level ${k}`);
        }
    }
}

function firstTask() {
    for (let i = 20; i > 10; i--) {
        if (i === 13) {
            break;
        } else {
            console.log(i);
        }
    }
}

for (let i = 2; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i < 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

let array = [];
for (let i = 5; i <= 10; i++) {
    array.push(i);
}
console.log(array);



// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }

}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i > 10; i--) {
        if (i === 13) {
            break;
        } else {
            console.log(i);
        }
    }

}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i < 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }

}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }

    // Не трогаем
    return arrayOfNumbers;
}