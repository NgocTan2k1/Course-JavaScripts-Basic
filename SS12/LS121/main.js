Array.prototype.myMap = function(cb) {
    var i = 0;
    var output = [];
    for(; i < this.length; i++) {
        var result = cb(this[i], i);
        output.push(result);
    }
    return output;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
     return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]


