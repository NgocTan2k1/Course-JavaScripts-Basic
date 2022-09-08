console.log('Math.PI\t\t:', Math.PI);
console.log('Math.round(1.23)\t\t:', Math.round(1.23));
console.log('Math.round(1.51)\t\t:', Math.round(1.51));
console.log('Math.round(1.49)\t\t:', Math.round(1.23));
console.log('Math.abs(-4)\t\t\t:', Math.abs(-4));
console.log('Math.ceil(4.999)\t\t:', Math.ceil(4.999));
console.log('Math.ceil(4.001)\t\t:', Math.ceil(4.001));
console.log('Math.floor(5.00001)\t\t:', Math.floor(5.00001));
console.log('Math.floor(5.99999)\t\t:', Math.floor(5.99999));
console.log('Math.random()\t\t\t:', Math.random());


console.log('==================== Test Game ====================');
var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]
console.log('random\t\t\t\t\t:', random);
console.log('bonus[random]\t\t\t:', bonus[random]);

random = Math.floor(Math.random() * 100);
var count = 0;
while (true){
    console.log('new random\t\t\t\t:', random);
    if(random < 5) {
        console.log('Success!!!');
        break;
    } else {
        console.log('Fail', ++count);
        random = Math.floor(Math.random() * 100);
        
    }
}

