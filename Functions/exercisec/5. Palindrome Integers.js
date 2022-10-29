// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
// · If the current integer is a palindrome, print: "true"
// · Otherwise, print: "false"

function palindromeIntegers (numbersArray){

let numberArrayLength = numbersArray.length

for (let index = 0; index < numberArrayLength; index++){

 let numberAsString = numbersArray[index].toString();
 let reversedString = numberAsString.split('').reverse().join('');// split - разделя дадените части в маси, reverse - обръща стойностите на масива на обратно join - обединява стойностите

 if(numberAsString === reversedString){
    console.log(true);
 } else {
    console.log(false);
 }

}    

}
palindromeIntegers ([123,323,421,121]);