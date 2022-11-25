function barIncome(customerArray) {

    const pattern = /%(?<customer>[A-Za-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*(?<price>[0-9|\.]+)\$/g

    let totalIncome = 0;
    let command = customerArray.shift();

    while (command !== 'end of shift') {
        let currentData = pattern.exec(command);

        if (currentData){
            const currentCustomer = currentData.groups['customer'];
            const currentProduct = currentData.groups['product'];
            const currentCount = Number(currentData.groups['count']);
            const currentPrice = Number(currentData.groups['price']);

            const totalProductPrice = currentCount * currentPrice;

            console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice}`);

            totalIncome += totalProductPrice;

           
        } else {
            command = customerArray.shift();
            // currentData = pattern.exec(command);
        }
       
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
barIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);
