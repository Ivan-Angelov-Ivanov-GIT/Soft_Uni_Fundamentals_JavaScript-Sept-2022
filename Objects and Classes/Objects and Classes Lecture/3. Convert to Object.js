function converter(input) {

    let convertedInfo = JSON.parse(input);

    for (const key of Object.keys(convertedInfo)) {
        console.log(`${key}: ${
            convertedInfo[key]
        }`);
    }

}
converter('{"name": "George", "age": 40, "town": "Sofia"}');
