function blackFlag(input) { // collect input data
    const days = Number(input.shift()); // взето е първото число от масива
    const dailyGain = Number(input.shift());
    const target = Number(input.shift());;

    // Variables

    let totalPlunder = 0;

    // loop days

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyGain;

        if (i % 3 == 0) {
            totalPlunder += dailyGain / 2;
        }

        if (i % 5 == 0) {
            totalPlunder *= 0.7;
        }

    }

    // print output

    if (totalPlunder >= target) {
        console.log(`Ahoy! ${
            totalPlunder.toFixed(2)
        } plunder gained.`)
    } else {
        let percentage = (totalPlunder / target) * 100;

        console.log(`Collected only ${
            percentage.toFixed(2)
        }% of the plunder.`);
    }
}
blackFlag(["5", "40", "100"]);
