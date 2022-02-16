function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`user ${this.name} exit`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 35);

alex.exit();

ivan.hello();
alex.hello();

// console.log(ivan);
// console.log(alex);



// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`hello ${this.name}`);
//     }
//     exit() {
//         console.log(`user ${this.name} exit`);
//     }
// }
// const square = new User('test', 20);
// console.log(square);