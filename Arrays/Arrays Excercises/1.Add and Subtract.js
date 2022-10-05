// Write a function, which changes the value of odd and even numbers in an array of numbers.

// · If the number is even - add to its value its index position

// · If the number is odd - subtract to its value its index position

// Output

// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified ar




function addSubtract (input){

    let resultArray= [];
    let imputArraySum = 0;
    let resultArraySum = 0;
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++){

        let currentNumber = input[i];

        // console.log(`index ${i} - value = ${currentNumber}`);

        let odd = currentNumber - i;
        let even = currentNumber + i;

        

        if (currentNumber % 2 === 0){

            resultArray.push(even);

        } else {
            resultArray.push(odd);
        }
        
        imputArraySum += currentNumber;

        resultArraySum += resultArray[i];

    }


    console.log(resultArray);
    console.log(imputArraySum);
    console.log(resultArraySum);


}addSubtract([5, 15, 23, 56, 35]);