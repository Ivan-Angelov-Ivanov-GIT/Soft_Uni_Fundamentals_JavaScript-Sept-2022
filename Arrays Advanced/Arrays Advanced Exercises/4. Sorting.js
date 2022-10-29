// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.

// Print the elements on one row, separated by a single space.

function sorting(arr) {

    let resultArray = [];

    let sortedArray = arr.sort((a, b) => a - b); // сортиране на масива от най-малкото към най-голямото число

    for (let index = 0; index < sortedArray.length; index++) {

        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();

        resultArray.push(lastElement);
        resultArray.push(firstArray);
    }

    resultArray.push(sortedArray.pop());
    resultArray.push(sortedArray.shift());

    console.log(resultArray.join(' '));
}
sorting([
    1,
    21,
    3,
    52,
    69,
    63,
    31,
    2,
    18,
    94
]);
