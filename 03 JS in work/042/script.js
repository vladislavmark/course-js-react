const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // open full height

    box.scrollTop = 0;

    // box.scrollBy(0, 200); //scroll не важливо в якому місці на 200
    // box.scrollTo(0, 40); //scroll від гори 40

    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop);