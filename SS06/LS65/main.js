// Viết code tại đây
function isNumber(value) {
    if(isNaN(value))
        return false;
    else{
        return typeof value === 'number';
    }
}



// Kì vọng đạt được
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false