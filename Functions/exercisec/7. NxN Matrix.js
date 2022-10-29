// Write a function that receives a single integer number n and prints nxn matrix with that number.

function matrix (number){

let arr = [];

for (let i = 1; i <= number; i++){
    let output = '';
    for(let k = 1; k <= number; k++){
        output += `${number} `;
    }
    arr.push(output);
}

console.log(arr.join(`\n`));

} matrix(3);