// 4x^2+2x+5 = 0

function squareEcuation(a, b, c) {
    let x1 = null;
    let x2 = null;
    const delta = b ** 2 + (4 * a * c);
    if (delta > 0) {
        x1 = (- b + Math.sqrt(delta)) / 2 * a;
        x2 = (- b - Math.sqrt(delta)) / 2 * a;
    } else if (delta === 0) {
        x1 = (- b + Math.sqrt(delta)) / 2 * a;
        x2 = x1;
    }
    
    return {
        x1: x1,
        x2: x2
    }
}


console.log(squareEcuation(4, 2, 5));

const cube = (number) => number ** 3;

console.log(cube(3));

const squareEcuationArrow = (a, b, c) => {
    let x1 = null;
    let x2 = null;
    const delta = b ** 2 + (4 * a * c);
    if (delta > 0) {
        x1 = (- b + Math.sqrt(delta)) / 2 * a;
        x2 = (- b - Math.sqrt(delta)) / 2 * a;
    } else if (delta === 0) {
        x1 = (- b + Math.sqrt(delta)) / 2 * a;
        x2 = x1;
    }
    
    return {
        x1: x1,
        x2: x2
    }
};

console.log(squareEcuationArrow(4, 2, 5));