function reverseInPlace (symbols){

// let result = '';


for (let i = 0; i < symbols.length / 2; i++){
    // result = symbols[i];
    let tempElement = symbols[i];

    symbols[i] = symbols[symbols.length - 1 - i];
 
    symbols[symbols.length - 1 - i] = tempElement;
} 

console.log(symbols.join(' '));

}reverseInPlace(['a', 'b', 'c', 'd', 'e']);