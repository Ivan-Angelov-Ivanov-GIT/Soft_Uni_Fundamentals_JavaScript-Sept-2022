// You're tasked to create a list of employees and their personal numbers.

// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).

// Try to use an object.

// At the end print all the list employees in the following format:

// "Name: {employeeName} -- Personal Number: {personalNum}"


function findEmployees(employeeList) {

    for (let i = 0; i < employeeList.length; i++) {
        let peopleName = employeeList[i];
        let employeeNumber = Number(employeeList[i].length);

        let employeeInfo = {

            name: peopleName,
            number: employeeNumber
        }


        console.log(`Name: ${
            employeeInfo.name
        } -- Personal Number: ${
            employeeInfo.number
        }`)
    };

}
findEmployees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
