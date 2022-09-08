var courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 250
    },

    {
        id: 2,
        name: "HTML, CSS",
        coin: 0
    },

    {
        id: 3,
        name: "Ruby",
        coin: 0
    },

    {
        id: 4,
        name: "PHP",
        coin: 400
    },

    {
        id: 5,
        name: "ReactJS",
        coin: 500
    },
];
console.log("==================== forEach ===================");
courses.forEach(function( course, index) {
    console.log(index, course);
});

console.log("==================== every ===================");
var isFree = courses.every(function(course, index) {
    console.log(index)
    return course.coin === 0;
});

if (isFree) {
    console.log("Free");
} else {
    console.log("No Free");
}

console.log("==================== some ===================");
isFree = courses.some(function(course, index) {
    console.log(index)
    return course.coin === 0;
});

if (isFree) {
    console.log("Have a Free course");
} else {
    console.log("No course Free");
}

console.log("==================== find ===================");
isFree = courses.find(function(course, index) {
    console.log(index)
    return course.coin === 0;
});

console.log(isFree);

console.log("==================== filter ===================");
isFree = courses.filter(function(course, index) {
    console.log(index)
    return course.coin === 0;
});

console.log(isFree);