'use strict'

const inputRu = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRu.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (inputRu.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "404 not a found"
        }
    });
});