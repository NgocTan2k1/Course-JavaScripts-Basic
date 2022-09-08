console.log('========== Sync ==========');
console.log("console.log(1);");
console.log("console.log(2);")
console.log('=>...');
console.log(1);
console.log(2);

console.log('========== Async ==========');
console.log(`setTimeout(function () {
    console.log(1);
}, 10000);`);
console.log("console.log(2);");
console.log('=>...');
setTimeout(function () {
    console.log(1);
}, 10000);
console.log(2);
