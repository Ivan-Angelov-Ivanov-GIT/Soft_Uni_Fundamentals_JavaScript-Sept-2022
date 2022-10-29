// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).

// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
function loadingBar (number){

let percentCount = '%'.repeat(number/10);
let dostCount = '.'.repeat(10 - (number/10));

if (number === 100){
    console.log(`100% Complete!`);
} else if (number < 100) {
    console.log(`${number}% [${percentCount}${dostCount}]`);
    console.log(`Still loading...`);
}

}loadingBar(30);