// // function catCalculator(inputArray) {

// //     class Cat {
// //         constructor(catName, catAge) {
// //             this.name = catName;
// //             this.age = catAge;

// //         }

// //         meow() {
// //             console.log(`${
// //                 this.name
// //             }, age ${
// //                 this.age
// //             } says Meow`)
// //         }
// //     }

// //     for (const commands of inputArray) {

// //         let arguments = commands.split(' ');

// //         let catName = arguments[0];
// //         let catAge = arguments[1];

// //         let cat = new Cat(catName, catAge);

// //         cat.meow();
// //     }


// // }
// // catCalculator(['Mellow 2', 'Tom 5']);


// function songs(inputArray) {

//     class Song {
//         constructor(songType, songName, songTime) {

//             this.type = songType;
//             this.name = songName;
//             this.time = songTime;

//         }
//     }

//     let songs = [];

//     let numberOfSongs = inputArray.shift();
//     // let typeOfSongs = input.pop();

//     for (let i = 0; i < inputArray.length; i++) {

//         let [typeOfSong, songName, songTime] = inputArray[i].split('_');

//         let song = new Song(typeOfSong, songName, songTime);

//         songs.push(song);

//         if (typeOfSong == 'All') {
//             songs.forEach((i) => console.log(i.name));
//         } else {
//             let filteredSongs = songs.filter((i) => i.type === typeOfSong);

//             filteredSongs.forEach((i) => console.log(i.name));
//         }

//     }


// }
// songs([
//     3,

//     'favourite_DownTown_3:14',

//     'favourite_Kiss_4:16',

//     'favourite_Smooth Criminal_4:01',

//     'favourite'
// ]);

function solve() {

    let result = Number("George");

    console.log(result);

}
solve()
