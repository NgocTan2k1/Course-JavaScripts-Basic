var myArray = [
    'Ngoc Tan',
    21,
    'VietNam',
    {
        course: 'JavaScript',
        price: 2500
    },

    [
        1, 2, 3, 4
    ]
];

var myString = 'I love you 3000'
//================ For of ... Array ==============
console.log('================ Value of Array ==============');
console.log(myArray);
for(var value of myArray) {
    console.log('value\t\t\t\t\t:', value);
    console.log('typeof value\t\t\t:', typeof value);
    console.log('');
}

//================ For of ... String ==============
console.log('================ Value of String ==============');
console.log(myString);
for(var value of myString) {
    console.log('value\t\t\t\t\t:', value);
    console.log('typeof value\t\t\t:', typeof value);
    console.log('');
}

//================ For of ... Object ==============
console.log('================ Value of Object ==============');
var myInfo = {
    name: "Ngoc Tan",
    age: 21,
    address: 'Quang Ngai',
};
console.log(myInfo);
console.log('----- Object.keys(Object) -----');
console.log('Object.keys(myInfo)\t\t:', Object.keys(myInfo));
for(var value of Object.keys(myInfo)) {
    console.log('value\t\t\t\t\t:', value);
    console.log('typeof value\t\t\t:', typeof value);
    console.log('myInfo[value]\t\t\t:', myInfo[value]);
    console.log('typeof myInfo[value]\t:', typeof myInfo[value]);
    console.log('');
}
console.log('---- Object.values(Object) ----');
console.log('Object.values(myInfo)\t\t:', Object.values(myInfo));
for(var value of Object.values(myInfo)) {
    console.log('value\t\t\t\t\t:', value);
    console.log('typeof value\t\t\t:', typeof value);
    console.log('');
}