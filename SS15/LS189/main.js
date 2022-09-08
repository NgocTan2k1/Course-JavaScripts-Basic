var array = ['JavaScript', 'PHP', 'Ruby'];
// var a = array[0];
// var b = array[1];
// var c = array[2];

var [a, b, c] = array;
console.log(a, b, c);
var [a, , b] = array;
console.log(a, b);
var [a, ...rest] = array;
console.log(a);
console.log(rest);
[a, b, ...rest] = array;
console.log(a);
console.log(b);
console.log(rest);

var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-addresses',
    children: {
        name: 'ReactJS',
    }
}

var {name, price} = course;
console.log(name, price);
var {names, prices} = course;
console.log(names, prices);

var {name: parentName, children: {name: childrenName}} = course;
console.log(parentName, childrenName);

var {name, description = 'Default description'} = course;
console.log(name);
console.log(description);

function logger(...params) {
    console.log(params);
}

logger(1, 2, 3, 4, 5, 6, 7, 8);
