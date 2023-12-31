const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const makeShape = (data) => {
    const { logoShape } = data;
    switch (logoShape) {
        case 'circle':
            const makeCircle = new Circle(data);
            return makeCircle;
            break;
        case 'triangle':
            const makeTriangle = new Triangle(data);
            return makeTriangle;
            break;
        case 'square':
            const makeSquare = new Square(data);
            return makeSquare;
            break;
        default:
            return `Something went wrong`;
            break;
    }
};

module.exports = { makeShape };