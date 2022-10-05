function printDay(dayNumber){
   
let days = [
    'Monday',
    'Tueseday',
    'Wednesday',
    'Thurstay',
    'Friday',
    'Saturday',
    'Sunday',
];

if (dayNumber < 1 || dayNumber > 7){
    console.log(`Invalid day!`);
} else {
    console.log(days[dayNumber - 1]);
}



}printDay([12]);