function rigthPlace(str, char, result){

    let res = str.replace('_', char);

    let output= res === result ? 'Matched': 'Not Matched';

    console.log(output);

}rigthPlace('Str_ng', 'I','Strong');