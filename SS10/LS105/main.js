console.log('Print from 0 to 100: 1 2 3 4 5 ... 98 99 100');
for(var i = 0; i <= 100; i++) {
    console.log(i);
}

console.log('Print from 100 to 1: 100 99 98 97 ... 3 2 1 0');
for(var i = 100; i > 0; i--) {
    console.log(i);
}

console.log('Print from 0 to 100: 0 5 10 ... 95 100');
for(var i = 0; i <= 100;  i+=5) {
    console.log(i);
}

console.log('Print from 100 to 0: 100 95 90 ... 5 0');
for(var i = 100; i > 0; i-=5) {
    console.log(i);
}