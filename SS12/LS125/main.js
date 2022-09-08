var courses = [
    {
        name: "JavaScript",
        coin: 680,
    },
    {
        name: "PHP",
        coin: 890,
    },
    {
        name: "Ruby",
        coin: 980,
    },
];

var filterCourses = courses.filter(function (course, index, array) {
    return course.coin > 750;
});
console.log(filterCourses);

Array.prototype.filter2 = function (callback) {
    var output = [];

    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(result);
            }
        }
    }

    return result;
};

var filterCourses = courses.filter(function (course, index, array) {
    return course.coin > 900;
});
console.log(filterCourses);
