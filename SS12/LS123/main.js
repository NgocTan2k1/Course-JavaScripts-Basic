var courses = new Array(10);
console.log(courses);
courses.push('JavaScript', 'PHP', 'Ruby');
console.log(courses);

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

courses.forEach2(function(course, index, array) {
    console.log("index:", index, "course:",course)
});