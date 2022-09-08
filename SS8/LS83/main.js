var getRandomItem = function(array) {
    var random = Math.floor((Math.random() * array.length));
    console.log('random\t\t\t:', random);
    return array[random];
}

var myArray = [
    1, 20, 5, 6, 11, 223, 212
];
console.log(getRandomItem(myArray));