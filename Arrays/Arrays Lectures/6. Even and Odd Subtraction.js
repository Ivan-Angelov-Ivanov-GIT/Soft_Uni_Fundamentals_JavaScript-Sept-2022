// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenOddSubtract(arr) {

    let total = 0;
    let evenNumbersTotal = 0;
    let oddNumbersTotal = 0;

    for (let num of arr) {

        if (num % 2 === 0) {

            evenNumbersTotal += num;

            // console.log(evenNumbersTotal);
        } else {

            oddNumbersTotal += num;
        }
    }

    total = evenNumbersTotal - oddNumbersTotal;

    console.log(total);

}
evenOddSubtract([3, 5, 7, 9]);
