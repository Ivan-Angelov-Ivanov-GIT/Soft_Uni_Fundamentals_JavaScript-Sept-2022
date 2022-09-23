function ages (age){

    let yearsOld = Number(age);
    let output ='';

    if (yearsOld >= 0 && yearsOld <= 2){
        output = 'baby';
    } else if (yearsOld >=3 && yearsOld <= 13){
        output = 'child';
    } else if (yearsOld >= 14 && yearsOld <= 19){
        output = 'teenager';
    } else if (yearsOld >= 20 && yearsOld <= 65){
        output = 'adult';
    } else if (yearsOld >= 66){
        output = 'elder';
    } else {
        output = 'out of bounds';
    }

    console.log(output);

}ages(1);