// You will receive three integer numbers.
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.

function addAndSubtrack (firdstNumber,secondNumber, thirdNumber){

    function add (a, b){

        let sumofTwoNumbers = a + b;
        return sumofTwoNumbers;
    }
    
    let sum = add(firdstNumber, secondNumber); //С това подаване се задава, че първата и втората цифра от основната функция се прехвърлят към вътрешната на която тези елементи са им дадени нови найменования а и б
    
    function subtract(sumofTwoNumbers, thirdNumber){
    
    let result = sumofTwoNumbers - thirdNumber;

    return result;

    }
     let finalResult = subtract(sum, thirdNumber);

     console.log(finalResult);


} addAndSubtrack (23,6,10);