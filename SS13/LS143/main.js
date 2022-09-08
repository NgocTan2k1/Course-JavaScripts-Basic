var boxElement = document.querySelector(".box") 
console.log(boxElement.innerHTML);
boxElement.innerHTML = "<h3 class = \"heading\">Heading Test innerHTML </h3>";
console.log('boxElement.innerHTML\n', boxElement.innerHTML);
console.log('typeof boxElement.innerHTML\t:', typeof boxElement.innerHTML);

console.log("");
console.log("== get innerHTML & outerHTML ==");
var boxTestElement = document.querySelector(".box-test");
console.log("boxTestElement.innerHTML\n", boxTestElement.innerHTML);
console.log('boxTestElement.outerHTML\n', boxTestElement.outerHTML);

console.log("== set innerHTML & outerHTML ==");
boxTestElement.outerHTML = "<span>Test set OuterHTML</span>"


