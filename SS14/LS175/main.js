var users = [
    {   
        id: 1,
        name: "Ngoc Tan",

    },

    {   
        id: 2,
        name: "Xuan Hoa",

    },

    {   
        id: 3,
        name: "Son Dang",
        
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh Son chua ra video :(",
    },

    {
        id: 2,
        user_id: 3,
        content: "Vua ra xong e oi!",
    },

    {
        id: 3,
        user_id: 1,
        content: "Cam on anh <3",
    },
];

//1. get comment
//2. from comments, get user_id.
//3. from user_id, get id of user.


//fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 2000);
    })
}

function getUserByIds(userIds) {
    return new Promise(
        function(resolve,reject) {
            var result = users.filter(function(user) {
                return userIds.includes(user.id)
            });

            setTimeout(function(){
                resolve(result);
            }, 2000)
        }
    );
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUserByIds(userIds)
                .then(function(users) {
                    return {
                        users: users,
                        comments: comments,
                    }
                });
            ;
        ;
    })

    .then(function(data) {
        var commentElement = document.getElementById("comment-block");
        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html+=`<li>${user.name}: ${comment.content}</li>`;
        })

        commentElement.innerHTML = html;
    })
;

