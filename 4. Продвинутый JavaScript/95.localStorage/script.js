'use strict';

// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const changeColorBtn = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});


if (localStorage.getItem('bg') === 'changet') {
    form.style.backgroundColor = 'red';
}

changeColorBtn.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changet') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changet');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'alex',
    age: 24
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));