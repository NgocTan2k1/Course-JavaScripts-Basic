var aElements = document.links;
console.log(aElements);

for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (event) {
        if (!event.target.href.startsWith('https://www.facebook.com/tan.phamngoc.754')) {
            event.preventDefault();
        }
        console.log(event.target.href);
    }
}
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function (event) {
    event.preventDefault();
}

ulElement.onclick = function (event) {
    console.log(event.target)
}

var divElement = document.querySelector('div');
divElement.onclick = function (event) {
    console.log('DIV')
}

var btnElement = document.querySelector('button');
btnElement.onclick = function (event) {
    event.stopPropagation();
    console.log('Click me!')
}