function helpIvan (numberOfPages,pagesReadedInOneOur,daysMustRead){

    let totalTimetoRead = numberOfPages / pagesReadedInOneOur;

    let requiredHoursPerDay = totalTimetoRead / daysMustRead;

    console.log(requiredHoursPerDay);

}helpIvan (212,20,2);