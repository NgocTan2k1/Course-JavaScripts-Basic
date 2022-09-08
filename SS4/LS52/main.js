function showMessage() {
    console.log("Meassage 1");
}

function showMessage() {
    console.log("Meassage 2");
}

function showMessage() {
    console.log("Meassage 3");
}

showMessage();


//parameter in function
function showFullName() {
    var fullName = 'Ngoc Tan';
    console.log(fullName);
}
showFullName();
//console.log(fullName); // error!


//function in function
function showMessageTest() {
    function showFullName() {
        console.log('Teo ne`');
    }

    showFullName();
}

showFullName();
showMessageTest();