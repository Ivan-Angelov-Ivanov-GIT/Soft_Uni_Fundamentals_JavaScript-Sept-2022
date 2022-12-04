function food(input) {

    let pattern = /(#|\|)(?<product>[A-Z][a-z]+)\1(?<date>[0-9]+[\/][0-9]+[\/][0-9]+)\1(?<calories>[0-9]+)\1/g;

    let matches = pattern.exec(input);

    let totalCalories = 0;

    let productsStore = [];

    while (matches) {


        let product = matches.groups['product'];
        let expirationDate = matches.groups['date'];
        let calories = matches.groups['calories'];

        totalCalories += Number(calories);
        let currentData = `Item: ${product}, Best before: ${expirationDate}, Nutrition: ${calories}`;
        productsStore.push(currentData);

        matches = pattern.exec(input);
    }
    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    productsStore.forEach(p => console.log(p));


}
food(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
