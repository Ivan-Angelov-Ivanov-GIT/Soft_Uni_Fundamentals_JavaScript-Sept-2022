// Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings
function meeting(input) {

    const meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }


    for (let [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${
            meetings[day]
        }`);
    }


}
meeting(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
