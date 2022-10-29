function Songs(numberOfSongs, songsData, typeList) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = Number(numberOfSongs);


    for (let i = 0; i < songsCount; i++) {
        let [type, name, time] = songsData[i].split('_');
        let song = new Song(type, name, time);
        console.log(song);
    }


}
Songs([
    4,

    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater'
]);
