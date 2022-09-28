function primeOrNot (number){

    let isPrime = true;

    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    

    else if (number > 1) {
    
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
    
    else {
        console.log("false");
    }

}primeOrNot (7);