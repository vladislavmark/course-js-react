// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); // получить все nody родителя 
// console.log(document.body.firstChild); // получить 1 елемент 
// console.log(document.body.firstElementChild); // получить 1 елемент 
// console.log(document.body.lastChild); // получить последний елемент 
// console.log(document.body.lastElementChild); // получить последний елемент 

// console.log(document.querySelector('#current').parentNode); //получить родителя
// console.log(document.querySelector('#current').parentElement); //получить родителя

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получить data atribute & next element
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); 
//получить data atribute & prev elemement

for (let node of document.body.childNodes) { //перебрать все елементы убирая #text
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}