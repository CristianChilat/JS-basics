// find maximum from a, b, c
// display maximum value and variable number. Example: c = 15 is maximum
// calculate  square of maximum from a, b, c
// display square of maximum
// find minimum from a, b, c
// display minimum value and variable number. Example: b = 3 is minimum
// display square of minimum
// display sum of square(minimum) + square(maximum)

function minNumber(a, b, c) {
    let minNumberValue = a;
    let minNumberName = 'a';
    if(b < minNumberValue){
        minNumberValue = b;
        minNumberName = 'b';
    }
    if(c < minNumberValue){
        minNumberValue = c;
        minNumberName = 'c';
    }

    return {
        value: minNumberValue,
        name: minNumberName
    };
}

const min = minNumber(3, 2, 4);
const square = (number) => number ** 2;

console.log('====================================');
console.log(`The number ${min.name} is minimum and it's value is ${min.value}. And it's square value is ${square(min.value)}`);
console.log('====================================');



function maxNumber(a, b, c) {
    let maxNumberValue = a;
    let maxNumberName = 'a';
    if(b > maxNumberValue){
        maxNumberValue = b;
        maxNumberName = 'b';
    }
    if(c > maxNumberValue){
        maxNumberValue = c;
        maxNumberName = 'c';
    }

    return {
        value: maxNumberValue,
        name: maxNumberName
    };
}


const max = maxNumber(5, 9 ,7)
console.log('====================================');
console.log(`The number ${max.name} is maximum and it's value is ${max.value}. And it's square value is ${square(max.value)}`);
console.log('====================================');

const squareSum = square(min.value) + square(max.value);
console.log(`Sum of both squares is ${squareSum}`)