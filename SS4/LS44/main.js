function writeLogNoMessage() {
    console.log('Hello World writeLogNoMessage');
}
writeLogNoMessage();


function writeLogMessage(message) {
    console.log(message);
}

writeLogMessage('Hello World writeLogMessage');
writeLogMessage(1);
writeLogMessage();

function writeLogMultiMessage(message1, message2) {
    console.log(message1);
    console.log(message2);
}

writeLogMultiMessage(123, [111, 111]);
writeLogMultiMessage('message1');

//arguments
function ShowArguments() {
    console.log(arguments);
}
ShowArguments('Test1', 'Test2', 'Test3');
ShowArguments('Test1', 'Test2', 'Test3','Test4','Test5');


function ShowArgumentsByFor() {
    var myString = ''
    for(var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}
ShowArgumentsByFor('Test1', 'Test2', 'Test3');
ShowArgumentsByFor('Test1', 'Test2', 'Test3','Test4','Test5');


