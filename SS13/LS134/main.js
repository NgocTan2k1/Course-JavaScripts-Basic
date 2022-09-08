console.log("========== Get by ID ==========");
var headingNode = document.getElementById('heading');
console.log({
    element: headingNode
});

console.log("")
console.log("========== Get by class ==========");
var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);

console.log("")
console.log("========== Get by tagname ========");
headingNodes = document.getElementsByTagName('h2');
console.log(headingNodes);

console.log("")
console.log("========== Get by CSS Selector ========");
console.log("*** querySelector ***");
headingNode = document.querySelector('body h2');
console.log([headingNode]);
console.log("*** querySelectorAll ***");
headingNode = document.querySelectorAll('body h2');
console.log(headingNode);

console.log("")
console.log("========== Get by CSS Selector ========");
console.log("*** querySelector ***");
headingNode = document.querySelector('body h2');
console.log([headingNode]);
console.log("*** querySelectorAll ***");
headingNode = document.querySelectorAll('body h2');
console.log(headingNode);