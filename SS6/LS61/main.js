var million = 1000000;
console.log('million =', million);
console.log('Datatypes of million:', typeof million);
billion = 1e9;
console.log('billion =', billion);
console.log('Datatypes of billion:', typeof billion);

//==================== Number.isFinite() ====================
console.log('\n==================== Number.isFinite() ====================');
console.log('Number.isFinite(2 / 0)\t\t\t:', Number.isFinite(2 / 0)); //false
console.log('Number.isFinite(29 / 5)\t\t\t:', Number.isFinite(29 / 5)); //true
console.log('Number.isFinite(0 / 5)\t\t\t:', Number.isFinite(0 / 5)); //true
console.log('Number.isFinite(0 / 0)\t\t\t:', Number.isFinite(0 / 0)); //false
console.log('Number.isFinite(NaN)\t\t\t:', Number.isFinite(NaN)); //false
console.log('Number.isFinite(undefined)\t\t:', Number.isFinite(undefined)); //false
console.log('Number.isFinite(\'\')\t\t\t\t:', Number.isFinite('')); //false
console.log('Number.isFinite(null)\t\t\t:', Number.isFinite(null)); //false

//==================== Number.isInteger() ====================
console.log('\n==================== Number.isInteger() ====================');
console.log('Number.isInteger(19.20)\t\t\t:', Number.isInteger(19.20)); //false
console.log('Number.isInteger(20)\t\t\t:', Number.isInteger(20)); //true
console.log('Number.isInteger(0)\t\t\t\t:', Number.isInteger(0)); //true
console.log('Number.isInteger(-1)\t\t\t:', Number.isInteger(-1)); //false
console.log('Number.isInteger(NaN)\t\t\t:', Number.isInteger(NaN)); //false
console.log('Number.isInteger(undefined)\t\t:', Number.isInteger(undefined)); //false
console.log('Number.isInteger(\'\')\t\t\t:', Number.isInteger('')); //false
console.log('Number.isInteger(null)\t\t\t:', Number.isInteger(null)); //false


//==================== Number.parseFloat() ====================
console.log('\n==================== Number.parseFloat() ====================');
console.log('Number.parseFloat(\'\')\t\t\t:',Number.parseFloat('123'));
console.log('Number.parseFloat(\'Na1\')\t\t:',Number.parseFloat('Na1'));
console.log('Number.parseFloat(\'NaN 1\')\t\t:',Number.parseFloat('NaN 1'));
console.log('Number.parseFloat(\'1NaN\')\t\t:',Number.parseFloat('1NaN'));
console.log('Number.parseFloat(\'1NaN2\')\t\t:',Number.parseFloat('1NaN2'));
console.log('Number.parseFloat(\'123.45\')\t\t:',Number.parseFloat('123.45'));
console.log('Number.parseFloat(\'123,45\')\t\t:',Number.parseFloat('123,45'));
console.log('Number.parseFloat(\'10.00\')\t\t:',Number.parseFloat('10.00'));
console.log('Number.parseFloat(\'  21  \')\t\t:',Number.parseFloat('   21   '));
console.log('Number.parseFloat(\'1 2 3 \')\t\t:',Number.parseFloat('1 2 3 4 5'));

//==================== Number.parseInt() ====================
console.log('\n==================== Number.parseInt() ====================');
console.log('Number.parseInt(\'\')\t\t\t\t:',Number.parseInt('123'));
console.log('Number.parseInt(\'Na1\')\t\t\t:',Number.parseInt('Na1'));
console.log('Number.parseInt(\'NaN 1\')\t\t:',Number.parseInt('NaN 1'));
console.log('Number.parseInt(\'1NaN\')\t\t\t:',Number.parseInt('1NaN'));
console.log('Number.parseInt(\'1NaN2\')\t\t:',Number.parseInt('1NaN2'));
console.log('Number.parseInt(\'123.45\')\t\t:',Number.parseInt('123.45'));
console.log('Number.parseInt(\'123,45\')\t\t:',Number.parseInt('123,45'));
console.log('Number.parseInt(\'10.00\')\t\t:',Number.parseInt('10.00'));
console.log('Number.parseInt(\'  21  \')\t\t:',Number.parseInt('   21   '));
console.log('Number.parseInt(\'1 2 3 \')\t\t:',Number.parseInt('1 2 3 4 5'));

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

