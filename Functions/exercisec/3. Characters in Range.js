// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.

function charatersInRange (firstChar, secondChar){

let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt()); // .charCodeAt() - показва на кое място в ASCI се намира дадения параметър. Math.min() проверява/печата най-малкото число заложено между двата параметъра
let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt()); //Math.max() - разпечатва най-голямото число от двата параметъра
let resultString = '';

for (let curentChar = rangeStart + 1; curentChar < rangeEnd; curentChar++){

    let singleChar = String.fromCharCode(curentChar); //String.fromCharCode() принтира стойността стояща зад дадения ASCI номер
 
 if (curentChar + 1 === rangeEnd){
    resultString += `${singleChar}`;
 } else {
    resultString += `${singleChar} `;
 }
    
}

console.log(resultString);


}
charatersInRange('#',':');

