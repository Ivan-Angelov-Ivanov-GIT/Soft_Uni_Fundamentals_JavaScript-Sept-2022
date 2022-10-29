// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.

function oddAndEvenSum (number){

    let numberAsString = number.toString();

    let evenSum = 0;

    let oddSum = 0;

    let numberAsStringLength = numberAsString.length;

    for (let index = 0; index < numberAsStringLength; index++){

        let singleNumber = Number(numberAsString[index]);
        
        if (singleNumber % 2 === 0){
            evenSum += singleNumber;
        } else {
            oddSum += singleNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


} oddAndEvenSum(1000435);