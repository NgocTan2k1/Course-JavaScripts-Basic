var headingElement = document.querySelectorAll('h1')[1];
console.log("========== Before set Attribute ==========");
console.log(headingElement);

headingElement.title = "heading-title";
headingElement.className = "heading-class-test";

headingElement.setAttribute('data','heading-data');
headingElement.setAttribute('href','heading-href');
headingElement.setAttribute('style','color: red;');


console.log("========== After set Attribute ==========");
console.log(headingElement);

console.log("========== After get Attribute ==========");
console.log(headingElement.getAttribute('style'));
console.log(headingElement.getAttribute('data'));
