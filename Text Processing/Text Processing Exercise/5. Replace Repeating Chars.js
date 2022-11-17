// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.
function replacement(input) {

    let result = input[0];

    for (let i = 1; i < input.length; i++) {

        const current = input[i];
        const prev = input[i - 1];

        if (current !== prev) {
            result += current;
        }


    }
    console.log(result);
}
replacement('aaaaabbbbbcdddeeeedssaa');
