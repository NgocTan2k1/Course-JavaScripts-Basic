var coursesApi = ' http://localhost:3000/courses';

fetch(coursesApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(courses) {
        // var htmls = courses.map(function(post) {
        //     return `<li>
        //         <h2>${post.title}</h2>
        //         <p>${post.body}</p>
        //     </li>`; 
        // });

        console.log(courses);

        // var html = htmls.join('');
        // document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log("Error URL");
    })