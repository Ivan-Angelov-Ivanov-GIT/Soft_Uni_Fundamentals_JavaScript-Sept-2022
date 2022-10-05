// function formatGrade (grade){

// if (grade < 3.00){
//     console.log(`Fail (2)`);
// } else if (grade >= 3.00 && grade <= 3.50){
//     console.log(`Poor (${grade.toFixed(2)})`);
// } else if (grade >= 3.50 && grade < 4.50){
//     console.log(`Good (${grade.toFixed(2)})`);
// } else if (grade >= 4.50 && grade < 5.50){
//     console.log(`Very good (${grade.toFixed(2)})`);
// } else {
//     console.log(`Excellent (${grade.toFixed(2)})`);
// }

// }formatGrade (2.99);

function formatGrade (grade){

let gradeWord = '';

if (grade < 3.00){
    gradeWord = 'Fail';
    grade = 2;
} else if (grade >= 3.00 && grade <= 3.50){
    gradeWord = 'Poor';
} else if (grade >= 3.50 && grade < 4.50){
    gradeWord = 'Good';
} else if (grade >= 4.50 && grade < 5.50){
    gradeWord = 'Very good';
} else {
    gradeWord = 'Excellent';
}

console.log(`${gradeWord} (${grade.toFixed(2)})`);

}formatGrade(2.99);