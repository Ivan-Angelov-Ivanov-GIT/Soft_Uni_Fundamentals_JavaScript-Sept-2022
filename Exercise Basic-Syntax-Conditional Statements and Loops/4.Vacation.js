function vacantion (peopleCount,typeOfPeople,dayOfTheWeek){

let price = 0;

let discount = 0;

if (dayOfTheWeek === 'Friday'){
 switch (typeOfPeople) {
    case 'Students': price = 8.45; break;
    case 'Business': price = 10.09; break;
    case 'Regular': price = 15; break;
         }
} else if (dayOfTheWeek === 'Saturday'){
    switch (typeOfPeople) {
        case 'Students': price = 9.80; break;
        case 'Business': price = 15.60; break;
        case 'Regular': price = 20; break;
             }
} else {
    switch (typeOfPeople) {
        case 'Students': price = 10.46; break;
        case 'Business': price = 16; break;
        case 'Regular': price = 22.50; break;
             }
}

let totalPrice = price * peopleCount;

if (typeOfPeople === 'Students' && peopleCount >= 30){
    discount=(totalPrice/ 100) * 15;
} else if (typeOfPeople === 'Business' && peopleCount >= 100){
    peopleCount =-10;
    discount = 0;
} else if (typeOfPeople === 'Regular' && peopleCount >= 10 && peopleCount <= 20){
    discount= (totalPrice/ 100) * 5;
} else {
    discount = 0;
}


console.log(`Total price: ${(totalPrice - discount).toFixed(2)}`);


// }vacantion(30, "Students","Sunday");
}vacantion(40,
    "Regular",
    "Saturday"
    );