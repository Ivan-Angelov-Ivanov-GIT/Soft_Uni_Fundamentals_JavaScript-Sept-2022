// You will be given an array of strings.

// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon.

// The second element in the array will be the max capacity of each wagon (single number).

// The rest of the elements will be commands in the following format:

// · Add {passengers} – add a wagon to the end with the given number of passengers.

// · {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).


function train(arr) {

    let passangersInTrain = arr.shift().split(' ').map(Number); // shift - изразване на нулевия елемент от масива, split -разделя резултата и с празно място го превръща в масив map - превръща масива в числа
    let maxCapcity = Number(arr.shift()); // изрязване отново на новия нулев индекс

    let arrayLength = arr.length;

    for (let index = 0; index < arrayLength; index++) {

        let currentRow = arr[index].split(' '); // създадохме нови масиви за командите на задачата

        if (currentRow[0] === 'Add') {

            let newWagonPassanger = Number(currentRow[1]);

            passangersInTrain.push(newWagonPassanger);
        } else {

            for (let j = 0; j < passangersInTrain.length; j++) {
                let passangersInCurrentWagon = passangersInTrain[j];
                if (passangersInCurrentWagon + Number(currentRow[0]) <= maxCapcity) {
                    passangersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }

        }


    }

    console.log(passangersInTrain.join(' '));


}
train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
// }train (['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);
