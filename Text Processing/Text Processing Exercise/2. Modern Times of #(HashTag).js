// The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.

function modernTimes(input) {

    const validWords = [];
    let sentence = input.split(' ');
    // console.log(sentence);

    for (const words of sentence) {

        const isValidWord = words.startsWith('#') && words.length > 1;
        if (isValidWord) {

            console.log(words.slice(1));

        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia'); // function stringDemo(string){//     const words = string.split(' ');//     words.froEach(word => {//         if (word.startWith('#'){//         })//     })// }
