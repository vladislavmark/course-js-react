'use strict'

class Rectaangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

const square = new Rectaangle(4, 4);
const long = new Rectaangle(10, 4);

console.log(square.calcArea());
console.log(long.calcArea());


class ColoredRectangleWithText extends Rectaangle {
    constructor(width, height, text, bgColor) {
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`text: ${this.text} and color: ${this.bgColor}`);
    }
}

const block = new ColoredRectangleWithText(25, 10, 'text', 'red');

block.showMyProps();