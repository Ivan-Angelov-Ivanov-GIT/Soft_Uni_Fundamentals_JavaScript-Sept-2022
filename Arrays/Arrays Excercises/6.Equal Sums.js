// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right.
// If there are NO elements to the left/right, their sum is 0.
// Print the index that satisfies the required condition or "no" if there is no such index.

function equal (arr){

let foundIndex ='no';
let arrLength = arr.length;

for (let i = 0; i < arrLength; i++){
    let leftSum = 0;
    let rightSum = 0;

//calculation left sum
for (let l = 0; l < i; l++){

    leftSum = leftSum + arr[l];

}
//calculation rigth sum
for (let r = i + 1; r < arrLength; r++){

    rightSum = rightSum + arr[r];
}

if (leftSum === rightSum){
    foundIndex = i;
}

}

console.log(foundIndex);

}equal([1, 2, 3, 3]);