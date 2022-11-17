// The input will be a single string.

// Write a function that cuts the given string into half and reverse the two halves.

// Print each half on a separate line.
function cutAndReverse(text) {
    const middle = text.length / 2;

    const firstPart = text.substring(0, middle).split('').reverse().join('');

    const secondPart = text.substring(middle).split('').reverse().join('');

    console.log(firstPart);
    console.log(secondPart);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
