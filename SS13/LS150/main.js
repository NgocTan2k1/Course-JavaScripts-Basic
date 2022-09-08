var boxElement = document.querySelector(".box");
console.log('boxElement.classList\n', boxElement.classList);
console.log('boxElement.classList.length\t\t\t\t\t\t:', boxElement.classList.length);

console.log("");
console.log("========== add class ==========");
boxElement.classList.add("box-3")
console.log('boxElement.classList.length\t\t\t\t\t\t:', boxElement.classList.length);
console.log('boxElement.classList[0]\t\t\t\t\t\t\t:', boxElement.classList[0]);
console.log('boxElement.classList[1]\t\t\t\t\t\t\t:', boxElement.classList[1]);
console.log('boxElement.classList[2]\t\t\t\t\t\t\t:', boxElement.classList[2]);
console.log('boxElement.classList.value\t\t\t\t\t\t:', boxElement.classList.value);
console.log('boxElement.classList.add("red","blue","green","violet")');
boxElement.classList.add("red","blue","green","violet")

console.log("");
console.log("========== contains class ==========");
console.log('boxElement.classList.value:', boxElement.classList.value);
console.log('boxElement.classList.contains("red", "blue")\t:', boxElement.classList.contains("red", "blue"));
console.log('boxElement.classList.contains(\'green\')\t\t\t:', boxElement.classList.contains('green'));
console.log('boxElement.classList.contains(\'black\')\t\t\t:', boxElement.classList.contains('black'));
console.log('boxElement.classList.contains(\'pink\')\t\t\t:', boxElement.classList.contains('pink'));

console.log("");
console.log("========== remove class ==========");
console.log('boxElement.classList.remove("red", "blue")');
boxElement.classList.remove("red", "blue");
console.log('boxElement.classList.contains(\'red\', \'blue\')\t:', boxElement.classList.contains('red'));

console.log('boxElement.classList.remove("black")');
boxElement.classList.remove('black');
console.log('boxElement.classList.contains(\'black\')\t\t\t:', boxElement.classList.contains('black'));
console.log('boxElement.classList.value:', boxElement.classList.value);

console.log("");
console.log("========== toggle class ==========");
setInterval(() => {
    boxElement.classList.toggle('red');
},1000);