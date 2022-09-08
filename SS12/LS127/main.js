var courses = [
    {
        name: "JavaScript",
        coin: 680,
        isFinish: true,
    },

    {
        name: "PHP",
        coin: 890,
        isFinish: false,
    },

    {
        name: "Ruby",
        coin: 980,
        isFinish: false,
    },
];
var isResult = courses.some(function (course, index, array) {
    return course.isFinish === true;
});
console.log(isResult);

Array.prototype.some2 = function (callback) {
    for (var index in this) {
       if (this.hasOwnProperty(index) && callback(this[index], index, this)) {
            return true;
       }
    }
    return false;
}

var isResult = courses.some2(function (course, index, array) {
    return course.isFinish === true;
});
console.log(isResult);
