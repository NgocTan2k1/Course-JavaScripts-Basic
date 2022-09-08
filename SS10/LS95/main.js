var getTotal = function(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
    
    }

    return sum;
}

console.log('Sum:', getTotal(number = [1, 2, 3, 4, 5]));