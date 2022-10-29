function converToJson(name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person));

}
converToJson('George', 'Jones', 'Brown');
