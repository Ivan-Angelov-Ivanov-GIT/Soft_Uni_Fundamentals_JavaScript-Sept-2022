function specialNumber (number){
    let sum = 0;
    let type = '';

for (let i = 1; i <= number; i++){

        sum += i; 
        // sum = number % 10;
        // sum = parseInt(sum /10);  

        if (sum === 5 || sum === 7 || sum === 11) {
            type = 'True';
         } else {
             type = 'False';
         }

         console.log(`${i} -> ${sum} ${type}`);
}



}specialNumber (15);