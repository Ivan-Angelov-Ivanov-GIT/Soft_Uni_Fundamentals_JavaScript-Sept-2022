// Write a function that receives a single string - the path to a file (the '\' character is escaped)

// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).

function fileExtraction(input) {

    let splitedPath = input.split('\\').pop();

    let [name, extension] = splitedPath.split('.');

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}
fileExtraction('C:\\Projects\\Data-Structures\\LinkedList.cs');
