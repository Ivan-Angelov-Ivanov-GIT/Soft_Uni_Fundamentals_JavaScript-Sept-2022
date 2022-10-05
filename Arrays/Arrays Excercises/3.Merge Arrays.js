// Write a function, which receives two string arrays and merges them into a third array.

// · If the index of the element is even, add into the third array the sum of both elements at that index

// · If the index of the element is odd, add the concatenation of both elements at that index

// Input

// As input, you will receive two string arrays (with equal length).

// Output

// As output, you should print the resulting third array, each element separated by " - ".




function mergeArrays (firstArr, secondArr){

 let resultArray = [];
 let firstArrayLength = firstArr.length

 for (let index = 0; index < firstArrayLength; index++){

     if (index % 2 === 0){
            
            resultArray.push(Number(firstArr[index]) + Number(secondArr[index]));
        
        } else {
            resultArray.push(firstArr[index] + secondArr[index]);
        }
       
 }
 console.log(resultArray.join(' - ')); 
 

} mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);