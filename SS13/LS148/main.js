var boxElement = document.querySelector(".box");
console.log(boxElement.style);

boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

boxElement = document.querySelector(".box-1");
Object.assign(boxElement.style, {
    marginTop: '5px',
    width: '200px',
    height: '400px',
    backgroundColor: 'blue',
});

console.log(boxElement.style.marginTop);
console.log(boxElement.style.width);
console.log(boxElement.style.height);
console.log(boxElement.style.backgroundColor);



