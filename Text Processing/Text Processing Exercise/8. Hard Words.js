// You will receive an array, which holds the string and another array.

// The string is a letter from a young boy who does not yet know some words and you have to help him. The letter has a few holes, these holes are the words unknown to the boy and you must fill them with strings from the array you receive at the second index.

// If the length of the hole is 4 you have to replace it with string with the same length and so on…

function hardWords(array) {

    const words = array.pop();
    // to do sort optional!

    words.sort((a, b) => b.length - a.length);
    let newString = array.toString();

    let cutString = array.toString().split(' ');

    for (const word of words) {
        for (const hole of cutString) {
            if (hole.startsWith('_') && hole.endsWith('_')) {
                if (hole.length === word.length) {
                    newString = newString.replace(hole, word);
                }
            }
            if (hole.startsWith('_') && ! hole.endsWith('_')) {

                let newHole = hole.slice(0, hole.length - 1);
                if (newHole.length === word.length) {
                    newString = newString.replace(newHole, word);
                }

            }
        }
    }

    console.log(newString);
}
hardWords([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    [
        'pie',
        'bring',
        'glad',
        'During',
        'amazing',
        'pharmacist',
        'sprained'
    ]
]);
