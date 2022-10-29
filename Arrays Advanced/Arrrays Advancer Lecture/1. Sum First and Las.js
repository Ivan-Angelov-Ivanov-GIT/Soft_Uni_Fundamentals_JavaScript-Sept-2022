// Write a function that calculates and prints the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is printed on the console.

function sumFirstAndLast (numbers){

let firstElement = Number(numbers[0]);

let lastElement = Number(numbers.pop());

console.log(firstElement + lastElement);

}sumFirstAndLast(['20', '30', '40']);