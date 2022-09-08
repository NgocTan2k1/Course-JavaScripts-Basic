Array.prototype.myEvery = function(callback) {
    for (var index  in this) {
        if(this.hasOwnProperty(index)){
            if (!callback(this[index],index,this)) {
                return false;
            }
        }
    }
    return true;    
}


// Expected results

const numbers = [1, 3, 3, 5];
console.log("elements of array % 2 != 0\t:", numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log("indexes of array % 2 == 0\t:", numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log("length of array % 2 == 0\t:", numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true


