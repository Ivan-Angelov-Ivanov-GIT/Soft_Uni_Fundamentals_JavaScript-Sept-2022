// You are given two integers n and k. Write a function that generates and prints the following sequence:

// · The first element is 1.

// · Every following element equals the sum of the previous k elements.

// · The length of the sequence is n elements.

// The input comes as two number arguments. The first element represents the number n, and the second – the number k.

// The output is printed on the console on a single line, separated by space.


function lastKey (length, k){

    let sequence = [1];

for ( let index = 1; index < length; index++){

 let lastElements = sequence.slice(sequence.length - k);

}


}lastKey(6, 3);