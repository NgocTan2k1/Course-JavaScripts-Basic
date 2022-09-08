console.log("========== 1 ==========");
var listItems = document.querySelectorAll('.box-1 li');
console.log("listItems\t:", listItems);

console.log("");
console.log("========== 2 ==========");
var boxNode = document.querySelector('.box-1')
var listItems = boxNode.querySelector('li');
console.log("boxNode\t:", boxNode);
console.log("listItems\t:", listItems);

console.log(boxNode.getElementsByTagName('p'))