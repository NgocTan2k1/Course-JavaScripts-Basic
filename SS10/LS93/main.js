var getRandNumbers = function(min, max, length) {
    var array = [];
    for(var i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * (max-min) + min);
    }

    return array;
}

console.log('Array:', getRandNumbers(1, 10, 100));