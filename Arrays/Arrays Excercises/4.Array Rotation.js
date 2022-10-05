// Write a function that receives an array and the number of rotations you have to perform.

// Note: Depending on the number of rotations, the first element goes to the end.

// Output

// Print the resulting array elements separated by a single space.


function rotation (arrToRotate,rotations){

    for (let index = 0; index < rotations; index++){
        let numberToMove = arrToRotate.shift();
        arrToRotate.push(numberToMove);
    }

    console.log(arrToRotate.join(' '));
    

} rotation([51, 47, 32, 61, 21], 2);