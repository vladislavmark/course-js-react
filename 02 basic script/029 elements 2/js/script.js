'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');

// console.dir(box);
// box.style.backgroundColor = 'green';
// box.style.width = '400px';

// const width = 500;
// box.style.cssText = `background-color: green; width: ${width}px`;

// btns[1].style.borderRadius = '20px';
// circle[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('lorem text');

div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); //old


// circle[0].remove();
// wrapper.removeChild(circle[0]); //old

// hearts[0].replaceWith(circle[0]);
// wrapper.replaceChild(circle[0], hearts[0]); //old

// div.innerHTML = '<h1>test</h1>';
div.textContent = 'text';

div.insertAdjacentHTML('beforebegin', '<h2>test2</h2>');