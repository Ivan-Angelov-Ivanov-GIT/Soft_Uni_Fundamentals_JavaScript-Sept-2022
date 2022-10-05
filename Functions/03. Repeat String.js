function repeatString (text,count){
    // text.repeat = count;

    let result = '';

    for (let i = 0; i < count; i++){
        result += text;
    }

return result;

} 

let repeatedString  = repeatString("abc", 3);

console.log(repeatedString); 