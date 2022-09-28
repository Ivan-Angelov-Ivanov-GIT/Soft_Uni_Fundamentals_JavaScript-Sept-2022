function dataTypesDemo (number){
  
    let isSpecial = true;
    const firstSpecialNumber = 5;
    const secondSpecialNumber = 7;
    const lastSpecialNumber = 11;

    for (let currentNumber = 1; currentNumber <= number; currentNumber++){

        let sumOfDigist = 0;
        let numberToString = currentNumber.toString();
        let stringLength = numberToString.length;


        for (let index = 0; index < stringLength; index++){

            if (currentNumber >= 10){
                sumOfDigist += Number(numberToString[index]);
            } else {
                sumOfDigist += Number([currentNumber]);
            }


        }

        if (sumOfDigist === firstSpecialNumber || sumOfDigist === secondSpecialNumber || sumOfDigist === lastSpecialNumber){
            isSpecial = true;
            console.log(`${currentNumber} -> True`);
        } else {
            isSpecial = false;
            console.log(`${currentNumber} -> False`);
        }
    }



}dataTypesDemo (15);