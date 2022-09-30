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