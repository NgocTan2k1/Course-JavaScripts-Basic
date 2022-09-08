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

console.log("========== every() ===========");
console.log("all course have coin > 650:", courses.every(function (course, index, array) {
    return course.coin > 650;
}));

console.log("all course have coin > 700:", courses.every(function (course, index, array) {
    return course.coin > 700;
}));

Array.prototype.every2 = function (callback) {
    for (var index  in this) {
        if(this.hasOwnProperty(index) && !callback(this[index], index, this)) {
            return false;
        }
    }
    return true;
}
console.log("");
console.log("========== every2() ===========");
console.log("all course have coin > 650:", courses.every2(function (course, index, array) {
    return course.coin > 650;
}));

console.log("all course have coin > 700:", courses.every2(function (course, index, array) {
    return course.coin > 700;
}));