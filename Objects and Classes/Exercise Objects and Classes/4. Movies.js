// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

// · "addMovie {movie name}" – add the movie

// · "{movie name} directedBy {director}" – check if the movie exists and then add the director

// · "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format

function movies(list) {

    let movies = [];

    list.forEach(line => {
        if (line.includes('addMovie ')) {
            let name = line.split('addMovie ')[1];
            movies.push({name});
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }


        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }


        }


    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {

            console.log(JSON.stringify(movie));

        }
    })

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
