// Viết code tại đây
function isNumber(value) {
    if (typeof value == 'number')
        return true;
    return false;
}



// Kì vọng đạt được
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false