var languages = [
    'HTML&CSS',
    'JavaScript',
    'PHP',
    'Ruby',
];

console.log('My Array:', languages);

//==================== ToString ===================
console.log('\n==================== ToString ===================');
console.log('languages.toString()\t\t\t\t\t\t:', languages.toString());
console.log('Typeof languages.toString()\t\t\t\t\t:', typeof languages.toString());

//==================== Join =======================
console.log('\n==================== Join =======================');
console.log('languages.join()\t\t\t\t\t\t\t:', languages.join());
console.log('languages.join(\'\')\t\t\t\t\t\t\t:', languages.join(''));
console.log('languages.join(\', \')\t\t\t\t\t\t:', languages.join(', '));
console.log('languages.join(\' - \')\t\t\t\t\t\t:', languages.join(' - '));
console.log('Typeof languages.join()\t\t\t\t\t\t:', typeof languages.join());

//==================== Pop ========================
console.log('\n==================== Pop ========================');
console.log('My Array:', languages);
console.log('languages.pop()\t\t\t\t\t\t\t\t:',languages.pop());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.pop()\t\t\t\t\t\t\t\t:',languages.pop());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.pop()\t\t\t\t\t\t\t\t:',languages.pop());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.pop()\t\t\t\t\t\t\t\t:',languages.pop());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.pop()\t\t\t\t\t\t\t\t:',languages.pop());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);

//==================== Push ========================
console.log('\n==================== Push ========================');
console.log('My Array:', languages);
console.log('languages.push(\'HTML&CSS\')\t\t\t\t\t:',languages.push('HTML&CSS'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.push(\'JavaScript\')\t\t\t\t:',languages.push('JavaScript'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.push(\'PHP\', \'Ruby\')\t\t\t\t:',languages.push('PHP', 'Ruby'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.push()\t\t\t\t\t\t\t:',languages.push());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);

//==================== Shift =======================
console.log('\n==================== Shift ========================');
console.log('My Array:', languages);
console.log('languages.shift()\t\t\t\t\t\t\t:',languages.shift());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.shift()\t\t\t\t\t\t\t:',languages.shift());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.shift()\t\t\t\t\t\t\t:',languages.shift());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.shift()\t\t\t\t\t\t\t:',languages.shift());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.shift()\t\t\t\t\t\t\t:',languages.shift());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);


//==================== UnShift =====================
console.log('\n==================== UnShift =====================');
console.log('My Array:', languages);
console.log('languages.unshift(\'Ruby\')\t\t\t\t\t:',languages.unshift('Ruby'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.unshift(\'PHP\' )\t\t\t\t\t:',languages.unshift('PHP'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.unshift(\'HTML&CSS\',\'JavaScript\')\t:',languages.unshift('HTML&CSS', 'JavaScript'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.unshift()\t\t\t\t\t\t\t:',languages.unshift());
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);

//==================== Splicing ====================
console.log('\n==================== Splicing =====================');
console.log('My Array:', languages);
console.log('----------- Splicing(x,y)----------');
console.log('languages.splice(1, 2)\t\t\t\t\t\t:', languages.splice(1, 2));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.splice(0, 1)\t\t\t\t\t\t:', languages.splice(0, 1));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.splice(0, 1)\t\t\t\t\t\t:', languages.splice(0, 1));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.splice(0, 1)\t\t\t\t\t\t:', languages.splice(0, 1));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('----------- Splicing(x, y, z)------');
console.log('languages.splice(0, 0, \'HTML&CSS\')\t\t\t:', languages.splice(0, 0, 'HTML&CSS'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.splice(1, 0, \'JavaScript\', \'Ruby\'):', languages.splice(1, 0, 'JavaScript', 'Ruby'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);
console.log('languages.splice(2, 0, \'PHP\')\t\t\t\t:', languages.splice(2, 0, 'PHP'));
console.log('New Array\t\t\t\t\t\t\t\t\t:', languages);


//==================== Splicing ====================
console.log('\n==================== Splicing =====================');
var languages1 = [
    'HTML&CSS',
    'JavaScript'
];
var languages2 = [
    'PHP',
    'Ruby'
]

console.log('My Array Languages1:', languages1);
console.log('My Array Languages2:', languages2);
console.log('languages1.concat(languages2)\t\t\t\t:', languages1.concat(languages2));
console.log('languages2.concat(languages1)\t\t\t\t:', languages2.concat(languages1));
console.log('New Array languages1\t\t\t\t\t\t:', languages1);
console.log('New Array languages2\t\t\t\t\t\t:', languages2);

//==================== Slicing ====================
console.log('\n==================== Slicing =====================');
console.log('languages.slice(0, 1)\t\t\t\t\t\t:', languages.slice(0, 1));
console.log('languages.slice(0, 2)\t\t\t\t\t\t:', languages.slice(0, 2));
console.log('languages.slice(0, 10)\t\t\t\t\t\t:', languages.slice(0, 10));
console.log('languages.slice(0)\t\t\t\t\t\t\t:', languages.slice(0));
console.log('languages.slice(-1)\t\t\t\t\t\t\t:', languages.slice(-1));




