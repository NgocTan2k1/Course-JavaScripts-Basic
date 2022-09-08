var courses = new Array(10);
console.log(courses);
courses.push('JavaScript', 'PHP', 'Ruby');
console.log(courses);

for(var index in courses) {
    console.log(courses[index])
}