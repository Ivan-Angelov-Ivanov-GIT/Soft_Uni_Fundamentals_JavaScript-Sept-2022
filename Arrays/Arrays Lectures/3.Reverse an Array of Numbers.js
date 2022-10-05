function reverse (count, numbers){
//create new array
let result = []; //empty array

//take count elements from numbers
for (let i = 0; i < count; i++){
 result[count - 1 - i] = numbers[i];
}    

console.log(result.join(' '));

} 
reverse (2, [66, 43, 75, 89, 47]);