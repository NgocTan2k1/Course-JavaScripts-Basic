var array = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];
console.log(new Set(array));
console.log([...(new Set(array))])
console.log(Object.values(new Set(array)))

function countDown(number) {
    if(number <= 0) {
        return;
    }

    console.log(number);
    return countDown(number - 1);
}

countDown(5);

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb)
    }
    return
}

var array = ['JavaScript', 'PHP', 'Ruby'];

loop(0, array.length, function(index) {
    console.log(array[index]);
});

function GT(number) {
    if(number < 0) {
        return "Bớt dỡn đi cha, ai tính giai thừa số không vậy?";
    }
    if(number === 0) {
        return 1
    }
    return number * GT(number - 1);
}

console.log(GT(-5));
