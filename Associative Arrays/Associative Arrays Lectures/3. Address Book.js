//

function createAndressBook(input) {

    let addressBook = {};

    for (const line of input) {
        let [name, adress] = line.split(':');

        addressBook[name] = adress;


    }

    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of addressBookEntries) {

        let [name, adress] = entry;

        // let name = entry[0];
        // let address = entry[1];

        console.log(`${name} -> ${adress}`);

    }

}
createAndressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
