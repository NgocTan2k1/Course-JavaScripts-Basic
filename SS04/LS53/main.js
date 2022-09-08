showMessageDeclarationFunction();
//showMessageExpressionFunction(); //error
//Declaration function
function showMessageDeclarationFunction() {
    console.log('Declaration Function');
}

//Expression function
var showMessageExpressionFunction = function() {
    console.log('Expression Function');
}

var myObject = {
    name: 'Tan',
    myFunction: function() {

    },
    age: 21
}

setTimeout(function() {

});

showMessageDeclarationFunction();
showMessageExpressionFunction();