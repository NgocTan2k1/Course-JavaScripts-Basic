var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];

function render(courses) {
    var html = courses.map(function (course) {
        return `<li>${course}</li>`; 
    });

    document.querySelector(".courses-list").innerHTML = html.join(""); 
}

render(courses)

