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

var i = 0;
function courseHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table(
        {
            'Luot chay: ': i,
            'Bien tich tru: ': accumulator,
            'Gia khoa hoc: ': currentValue.coin,
            'Tich tru duoc: ': total,
        }
    );
    return accumulator + currentValue.coin
}

var newCourses = courses.reduce(courseHandler, 0);
console.log(newCourses);
