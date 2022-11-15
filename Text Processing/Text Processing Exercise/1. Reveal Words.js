// Write a function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.


function wordRevealer(words, text) {


    let wordsArray = words.split(', ');

    wordsArray.forEach(word => {
        const match = ` ${
            '*'.repeat(word.length)
        }`;
        text = text.replace(match, ` ${word}`);
    });
    console.log(text);

}
wordRevealer('great, learning', 'softuni is ***** place for ******** new programming languages ');
