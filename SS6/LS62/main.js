var age = 21;
var PI = 3.14;

var otherNumber = new Number(9);
//==================== Data Number =====================
console.log('\n===================== Data Number =====================');
console.log('age\t\t\t:', age);
console.log('PI\t\t\t:', PI);
console.log('otherNumber\t:', otherNumber);

console.log('\n===================== Type of data =====================');
console.log('typeof age\t\t\t:', typeof age);
console.log('typeof PI\t\t\t:', typeof PI);
console.log('typeof otherNumber\t:', typeof otherNumber);

//==================== NaN =====================
console.log('\n===================== NaN =====================');
var result = 123 / 'abc';
console.log('result = 123 / \'abc\'\t:', result);
console.log('typeof NaN\t\t\t\t:', typeof result);
console.log('----------Check NaN by function isNaN()----------');
console.log('isNaN(result)\t\t\t:', isNaN(result));
console.log('isNaN(25/7)\t\t\t\t:', isNaN(25/7));


//==================== Number.prototype.toFixed() ====================
console.log('\n==================== Number.prototype.toFixed() ====================');
var numberObject = 1234.56789;
console.log('My numberObject is', numberObject);
console.log('typeof numberObject\t\t\t\t:',typeof numberObject);

console.log('numberObject.toFixed()\t\t\t:',numberObject.toFixed());
console.log('typeof numberObject.toFixed()\t:',typeof numberObject.toFixed());

console.log('numberObject.toFixed(1)\t\t\t:',numberObject.toFixed(1));
console.log('typeof numberObject.toFixed(1)\t:',typeof numberObject.toFixed(1));

console.log('numberObject.toFixed(6)\t\t\t:',numberObject.toFixed(6));
console.log('typeof numberObject.toFixed(6)\t:',typeof numberObject.toFixed(6));

//==================== Number.prototype.toString() ====================
console.log('\n==================== Number.prototype.toString() ====================');
var number = 2201.2001;
console.log('My numberObject is', number);
console.log('numberObject.toString()\t\t\t:',number.toString());
console.log('typeof numberObject.toString()\t:',typeof number.toString());
console.log('(NaN).toString()\t\t\t\t:',(NaN).toString());
console.log('typeof (NaN).toString()\t\t\t:',typeof (NaN).toString());
console.log(typeof NaN)