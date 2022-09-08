var inputElement = document.querySelector("input[type = 'text']");
console.log(inputElement);
inputElement.onchange = function(event) {
    console.log("========== input[type = 'text'] ==========");
    console.log(event.target.value);
};
inputElement = document.querySelector("input[type = 'checkbox']");
console.log(inputElement);

inputElement.onchange = function(event) {
    console.log("========== input[type = 'checkbox'] ==========");
    console.log(event.target.checked);
};

var selectElement = document.querySelector("select");
selectElement.onchange = function(event) {
    console.log("========== select ==========");
    console.log(event.target.value);
};

inputElement = document.querySelector("input[type = 'text']");
inputElement.onkeydown = function(event) {
    console.log("========== input[type = 'text'] ==========");
    console.log("========== onkeydown ==========");
    console.log("event.which", event.which);
    console.log(event.target.value);
};

inputElement.onkeyup = function(event) {
    console.log("========== input[type = 'text'] ==========");
    console.log("========== onkeyup ==========");
    console.log("event.which", event.which);
    console.log(event.target.value);
};
