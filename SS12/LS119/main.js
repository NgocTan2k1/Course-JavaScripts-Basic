function sumCb(a, b) {
    return a + b;
}

function subCb(a, b) {
    return a - b;
}

function multiCb(a, b) {
    return a * b;
}

function divCb(a, b) {
    return a / b;
}


function caculate(a, b, cb) {
    return cb(a, b);
}

console.log('============ Expected results ============');
console.log('caculate(1, 2, sumCb)\t\t:', caculate(1, 2, sumCb)) // Output: 3
console.log('caculate(1, 2, subCb)\t\t:', caculate(1, 2, subCb)) // Output: -1
console.log('caculate(1, 2, multiCb)\t\t:', caculate(1, 2, multiCb)) // Output: 2
console.log('caculate(3, 1, divCb)\t\t:', caculate(3, 1, divCb)) // Output: 3



