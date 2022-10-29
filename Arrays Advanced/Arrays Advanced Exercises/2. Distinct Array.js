// You will be given an array of integer numbers on the first line of the input.

// Remove all repeating elements from the array.

// Print the result elements separated by a single space.

function distinctArray(arr) {

    let uniqueNumbersArray = [];
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {

        if (! uniqueNumbersArray.includes(arr[i])) {
            uniqueNumbersArray.push(arr[i]);
        }


    }
    console.log(uniqueNumbersArray.join(' '));
}
// distinctArray([1, 2, 3, 4]);
distinctArray([
    7,
    8,
    9,
    7,
    2,
    3,
    4,
    1,
    2
]);
