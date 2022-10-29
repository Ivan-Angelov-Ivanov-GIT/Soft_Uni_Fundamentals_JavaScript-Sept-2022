// function equalArrays (firstArray,secondArray){

//     let sum = 0;
//     let areEqual = true;
    
//     // for (let i = 0; i < firstArray.length; i++){
//     //     firstArray[i] = Number(firstArray[i]);
//     //     secondArray[i] = Number(secondArray[i]);

//     //     sum += firstArray[i];

//     //     console.log(`First array - ${firstArray[i]}`);
//     //     console.log(`Second array - ${secondArray[i]}`);
//     //     console.log(`Array Sum - ${sum}`);


//     // if (firstArray[i] === secondArray[i]){
//     //     console.log(`Arrays are identical. Sum: ${sum} `);
//     //     areEqual = true;
//     //     break;
//     // } else {
//     //     console.log(`Arrays are not idential. Found difference at ${[i]} index`);

//     //     areEqual = false;
//     //     break;
//     // }


//     // }

// //   for (let i = 0; i < firstArray.length; i++){

// //     sum += Number(firstArray[i]);

// //     console.log(sum);
// //   }

// // for (number of firstArray){
// //     sum += Number(number);
// //     console.log(sum);
// // }
function equalArr (firstArr,secondArr){

    let sum = 0;
    let flag = true;

    for (let i = 0; i < firstArr.length; i++){
    //    console.log(`${firstArr[i]} - ${secondArr[i]}`); 
       
       if (firstArr[i] !== secondArr[i]){
        flag  = !flag;
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        break;
        
       } else {
        sum += Number(firstArr[i]);
       }
      
    }

    if (flag){
        console.log(`Arrays are identical. Sum: ${sum}`); 
    }

}equalArr (['10','20','30'],['10','20','30']);