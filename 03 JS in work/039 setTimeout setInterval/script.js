const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            setInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('test2');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('hi');
//     id = setTimeout(log, 500);
// }, 500);