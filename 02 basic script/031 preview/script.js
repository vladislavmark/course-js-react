const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

//not usag
// btn.onclick = function () {
//     alert('test');
// };

// btn.addEventListener('click', function (e) {
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     // e.target.remove();
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true });
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
});