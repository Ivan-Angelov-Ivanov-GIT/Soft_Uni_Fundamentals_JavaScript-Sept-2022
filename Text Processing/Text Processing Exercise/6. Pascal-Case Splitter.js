// You will receive a single string.

// This string is written in PascalCase format. Your task here is to split this string by every word in it.

// Print them joined by comma and space.

function pascalCase(text) {

    let result = text[0];

    let lower = text.toLowerCase();

    for (let i = 1; i < text.length; i++) {

        if (text[i] !== lower[i]) {
            result += ', '
        }

        result += text[i];


    }
    console.log(result);
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
