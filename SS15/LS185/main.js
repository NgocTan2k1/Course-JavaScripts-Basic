// function Course(name, price) {
//     this.name = name;
//     this.price = price;
// }

// var jsCourse = new Course("JavaScript", 1000);
// var phpCourse = new Course("PHP", 1000);
// console.log(jsCourse);
// console.log(phpCourse);

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

var jsCourse = new Course("JavaScript", 1000);
var phpCourse = new Course("PHP", 1000);
console.log(jsCourse);
console.log(phpCourse);