var a = 10;

var output;
console.log('---------- output = a++ ----------');
output = a++;
console.log('output = ' + output);
console.log('a = ' + a);

console.log('\n---------- output = a-- ----------');
output = a--;
console.log('output = ' + output);
console.log('a = ' + a);

console.log('\n---------- output = ++a ----------');
output = ++a;
console.log('output = ' + output);
console.log('a = ' + a);

console.log('\n---------- output = --a ----------');
output = --a;
console.log('output = ' + output);
console.log('a = ' + a);


var number = 21;
console.log('\n---------- number ----------');
console.log('\nnumber = ' + number);
console.log('--number * 2 + number++ = ' + (--number * 2 + number++));