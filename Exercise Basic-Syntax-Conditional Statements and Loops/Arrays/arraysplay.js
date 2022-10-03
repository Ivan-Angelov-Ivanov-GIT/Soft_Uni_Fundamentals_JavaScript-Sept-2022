// Решавам 7. Equal Arrays от лекциите за масиво

function equalArr (firstArr,secondArr){

    for (let i = 0; i < firstArr.length; i++){
        
        let firstArrResult = Number(firstArr[i]);

        for (let j = 0; j < secondArr.length; j++){

        let secondArrResult = Number (secondArr[j]);

            // if ( firstArrResult === secondArrResult ){

            //     console.log(`Arrays are identical.`);
            // } else {
            //     console.log(`Arrays are not identical. Found difference at 0 index`);

            console.log(firstArrResult);
         console.log(secondArrResult);
            }

         

        }

        
       
        

    }


}equalArr(['10','20','30'],['10','20','30']);