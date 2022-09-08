function logger(a, b, ...params) {
    console.log(params);
}
logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function log({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

log({
    name: "Ngoc Tan",
    age: 21,
    address: "Quang Ngai",
    price: NaN
})

function logArr([a, b, ...params]) {
    console.log(a, b);
    console.log(params);
}
logArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


var arr1 = ["JavaScript", "PHP", "Ruby"];
var arr2 = ["ReactJS", "Dart"];
var arr = [...arr1, ...arr2];
console.log(arr);
arr = [...arr2, ...arr1];
console.log(arr);

var obj1 = {
    name: "JavaScript",
}
var obj2 = {
    price: NaN,
}
var obj = {
    ...obj1,
    ...obj2,
}
console.log(obj);

var defaultConfig = {
    api: "http://domain-trang-khoa-hoc",
    apiKey: "Key",
    other: "other",
    //
    //
};

var excerciseConfig = {
    ...defaultConfig,
    api: "http://domain-trang-bai-tap",
};

console.log(excerciseConfig);

var array = ["JavaScript", "PHP", "Ruby"];
function logger(...rest) {
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
};
logger(...array);
