function integerAndFloat (numberOne, numberTwo, numberThree){

let sum = numberOne + numberTwo + numberThree;
// let type = '';

// if(Number.isInteger(sum)){
//     type = 'Integer';
// } else {
//     type = 'Float';
// }

let type = Number.isInteger(sum) ? 'Integer' : 'Float';

console.log(`${sum} - ${type}`)

} integerAndFloat (9, 100, 1.1);