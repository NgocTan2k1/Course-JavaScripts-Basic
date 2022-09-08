/**
 * Primitive Data
    -   Number
    -   String
    -   Boolean
    -   Undefined
    -   Null
    -   Symbol

 * Complex Data
    -   Function
    -   Object
    -   Array
 */


//Number
var a = 1;
var b = 2.5;
a = 20;
console.log(typeof(a));
console.log(typeof(b));

//String
var fullName = "'Pham' 'Ngoc' 'Tan'";
console.log(fullName);
fullName = '\'Pham\' \'Ngoc\' \'Tan\'';
console.log(fullName);
console.log(typeof(fullName));


//Boolean
var isSuccess = true;
console.log(isSuccess);
console.log(isSuccess = false);
console.log(typeof(isSuccess));

//Undefined
var isUnd;
console.log(isUnd);
console.log(typeof(isUnd));

//Null
var isNull = null;
console.log(isNull);
console.log(typeof(isNull));

//Symbol
var id1 = Symbol('id');
var id2 = Symbol('id');

console.log(id1 === id2);
console.log(typeof(id1));

//Function
var myFuction = function() {
    console.log("Test Datatypes function");
}
myFuction();
console.log(myFuction);
console.log(typeof(myFuction));

//Object
var myObject = {
    name: 'Ngoc Tan',
    'age': 21,
    "address": "QNgai",
    myFuction: function() {
        console.log("Test function in object");
    },

}
console.log(myObject);
console.log(typeof(myObject));

//Array
var myArray = [
    'JS',
    'PHP',
    'Ruby'
]

