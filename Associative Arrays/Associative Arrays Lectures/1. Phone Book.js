// Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.

function printPhoneBook(input) {

    let phoneBook = {}; // празен обект в който да се вкарват данни

    for (const entry of input) {
        let [name, phone] = entry.split(' '); // създава ни нов масив
        phoneBook[name] = phone; // вкарва и презаписва числото в обекта
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${
            phoneBook[name]
        }`);
    }

}
printPhoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
