var languages1 = [
    'JavaScript',
    'PHP',
    'Ruby',
    'HTML & CSS',
];

var languages2 = new Array(
    'HTML & CSS',
    'JavaScript',
    'PHP',
    'Ruby',
);

console.log('====================== Array ===============================');
console.log('My Array languages 1\t\t\t\t:', languages1);
console.log('Typeof Array languages 1\t\t\t:',typeof languages1);
console.log('My Array languages 2\t\t\t\t:', languages2);
console.log('Typeof Array languages 2\t\t\t:',typeof languages2);

console.log('\n==================== Array and Object ====================');
console.log('Check by Array.isArray(languages1)\t:', Array.isArray(languages1))
console.log('Check by Array.isArray(languages2)\t:', Array.isArray(languages2))

console.log('\n==================== Length and Index ====================');
console.log('Length of Array\t\t\t\t\t\t:', languages1.length);
console.log('With index = 2\t\t\t\t\t\t:', languages1[2]);
console.log('With index = length + 1\t\t\t\t:', languages1[languages1.length + 1]); // undefined
console.log('With index < 0 \t\t\t\t\t\t:', languages1[-1]); // undefined