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

function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    };
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);
