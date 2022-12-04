function pirates(input) { // let [city, population, gold] = 0;

    let cities = {};
    let array = [];

    while (input[0] !== 'Sail') {

        console.log(input[0]);

        let command = input.shift().split('||');

        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);

        let result = array.find((x) => x.city === city);
        let index = array.indexOf(result);

        if (result) {
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = {
                city,
                population,
                gold
            };
            array.push(cities);
        }

    }

    while (input[0] !== 'End') {


                let commads = input.shift().split('=>');
            let currentCommand = commands.shift();

            switch (currentCommand) {

                    case 'Plunder':

                        let cityName = commads[0];
                        let people = Number(commads[1]);
                        let gold = Number(commads[2]);

                        console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                        let result = array.find((x) => x.city == cityName);
                        let index = array.indexOf(result);

                        array[index].population -= people;
                        array[index].gold -= gold;

                        if (array[index].population<= 0 || array[index].gold <=0){
                            console.log(`${cityName} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                break;
        }

    }


}
pirates(([
    "Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=> 75000 => 380 ",
 "Prosper=>Santo Domingo=>180", "End"]
                )
            );
