function amazing(numb){

    let textNumber = numb.toString();
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < textNumber.length; i++){
        let currnetDigit = textNumber[i];
        let currentNumber =Number(textNumber[i]);
        sum += currentNumber;
    }

    let sumText = sum.toString();

    for(let i = 0; i< sumText.length; i++){
        let currnetDigit = sumText[i];
        if (currnetDigit == '9'){
            isAmazing = true;
            break;
        }
    }

    console.log(`${numb} Amazing? ${isAmazing? 'True' : 'False'}`);
}
amazing(1233);