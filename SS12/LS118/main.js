function myCallback(value) {
    console.log(value);
}

function myFunction(param) {
    if(typeof param === 'function') {
        param('Tan is handsome');
    }
}
myFunction(myCallback);