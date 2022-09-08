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


var totalCoin = courses.reduce(function(total,course) {
    return total + course.coin;
}, 0);
console.log(totalCoin);

var numbers = [250, 0, 0, 400, 500];
totalCoin = numbers.reduce(function(total,number) {
    return total + number;
});
console.log(totalCoin);

console.log('==================== FlatArray ====================');
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);


console.log('==================== Topic ====================');
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML & CSS",
            },

            {
                id: 2,
                title: "JavaScript",
            },
        ],
    },

    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },

            {
                id: 2,
                title: "NodeJS",
            },
        ],
    },
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(newCourses);

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>    
        </div>
    `;
});

console.log(htmls.join(''))