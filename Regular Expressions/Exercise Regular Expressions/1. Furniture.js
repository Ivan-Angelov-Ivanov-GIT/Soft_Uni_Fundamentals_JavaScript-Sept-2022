function findFurniture(input) {
    let totalMoney = 0;
    let pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;

    let index = 0;
    console.log('Bought furniture:');
    while (input[index] !== 'Purchase') {

        let productRow = input[index];
        let validProduct = pattern.exec(productRow);


        while (validProduct !== null) {
            const productName = validProduct.groups.name;
            console.log(productName);
            const productPrice = validProduct.groups.price;
            const productQuantity = validProduct.groups.quantity;

            totalMoney += productPrice * productQuantity;

            validProduct = pattern.exec(productRow);

        }


        index++;
    }
    console.log(`Total money spend: ${
        totalMoney.toFixed(2)
    }`);

}
findFurniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
// findFurniture([
//     '>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase'
// ]);
