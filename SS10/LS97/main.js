var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(arr) {
    var sum = 0;
    var arrLength = arr.length;

    for(var i = 0; i < arrLength; i++) {
        sum += arr[i].price;
    }

    return sum;
}


// Expected results:
console.log(getTotal(orders)) // Output: 8700000
