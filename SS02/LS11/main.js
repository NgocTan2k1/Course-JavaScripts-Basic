/**
 * alert
 * console
 * confirm
 * prompt
 * set timeout
 * set interval
 */

//Khai bao bien
var fullName = 'Pham Ngoc Tan'
var conFirm = 'Xac nhan do tuoi!';

//alert
//alert(fullName);

//console
console.log(fullName);
console.warn(fullName);
console.error(fullName);
console.clear()

//confirm
confirm(conFirm);

//prompt
prompt(conFirm);

//setTimeout
setTimeout(function() {
    alert(fullName + ' is extreme handsome!');
}, 1000);

//setInterval
setInterval(function() {
   console.log(fullName + ' is extreme handsome! ' + Math.random());
}, 1000);
