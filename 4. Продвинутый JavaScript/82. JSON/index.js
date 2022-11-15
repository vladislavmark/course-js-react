'use strict'

const person = {
    name: "jonh",
    tel: "+38088888",
    parent: {
        mom: "ola",
        dad: "Oleg"
    }
}

const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);

// const jsonData = JSON.stringify(person);
// console.log(JSON.parse(jsonData));

// console.log(JSON.stringify(person));

