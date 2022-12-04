function game(input) { // Деклариране на елементи
    let code = input.shift();
    let instructions = input.slice();
    let tempMessage = '';

    // итериране на лууп
    let instruction = instructions.shift();
    while (instruction !== 'Decode') {

        let arguments = instruction.split('|');
        let instructionName = arguments.shift();

        // console.log(instructionName);
        // console.log(arguments);

        switch (instructionName) {

            case 'Move':
                let lettersNumber = Number(arguments[1]);
                let lettersToMove = code.substring(0, lettersNumber);
                tempMessage = code.replace(lettersToMove, '');
                tempMessage += lettersNumber;
                code = tempMessage;
                break;


            case 'Insert':
                break;

            case 'ChangeAll':
                break;


        }


        instruction = instructions.shift();
    }

    // принтиране

    // console.log(`The decrypted message is: ${message}`);


}game([
    'zzHe',
    // 'ChangeAll|z|l',
    // 'Insert|2|o',
    'Move|3',
    'Decode'
]);
