var name = "Javascript";
var price = 1000;

var course = {
    name: name,
    price: price,
    getName: function() { return this.name; },
}
console.log(course);

var course1 = {
    name,
    price,
    getName() { return this.name; },
}
console.log(course1);

var filedName = "name";
var filedPrice = "price";
var course2 = {
    [filedName]: 'Javascript',
    [filedPrice]: 1000,
}
console.log(course2);

