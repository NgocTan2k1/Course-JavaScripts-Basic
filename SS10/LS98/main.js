var myInfo = {
    name: 'Ngoc Tan',
    age: 21,
    address: 'Quang Ngai, VN'
};

var languages = [
    'HTML&CSS',
    'JavaScript',
    'PHP',
    'Ruby',
];

var myString = 'I love you 3000';

//=============== For in Object ==============
console.log('=============== Key of Object ==============');
console.log(myInfo)
for(var key in myInfo) {
    console.log('key\t\t\t\t\t:', key);
    console.log('typeof key \t\t\t:', typeof key);
    console.log('myInfo[key]\t\t\t:', myInfo[key]);
    console.log('');
}

//================ For in Array ==============
console.log('================ Key of Array ==============');
console.log(languages)
for(var key in languages) {
    console.log('key\t\t\t\t\t:', key);
    console.log('typeof key \t\t\t:', typeof key);
    console.log('languages[key]\t\t:', languages[key]);
    console.log('');
}

//=============== For in String ==============
console.log('=============== Key of String ==============');
console.log(myString)
for(var key in myString) {
    console.log('key\t\t\t\t\t:', key);
    console.log('typeof key \t\t\t:', typeof key);
    console.log('myString[key]\t\t:', myString[key]);
}