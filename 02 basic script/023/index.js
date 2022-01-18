const soldier = {
    health: 100,
    arm: 200,
};

const little = {
    health: 40,
};

Object.setPrototypeOf(little, soldier); //встановлення прототипу

console.log(little.arm);

const jonh = Object.create(soldier); // створення нового обєкту з прототипом