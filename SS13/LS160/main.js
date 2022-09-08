var btnElement = document.getElementById('btn');

// setTimeout(function () {
//     btnElement.onclick = function() {
//         console.log("Work 1");
    
//         console.log("Work 2");
    
//         alert("Work 3");
    
//     }
// }, 3000);

// setTimeout(function () {
//     btnElement.onclick = function() {
//         // console.log("Work 1");
    
//         // console.log("Work 2");
    
//         // alert("Work 3");
    
//     }
// }, 10000);


var work1 = function () {
    console.log("work 1");
}

var work2 = function () {
    console.log("work 2");
}

var work3 = function () {
    console.log("work 3");
}

btnElement.addEventListener('click', work1);
btnElement.addEventListener('click', work2);
btnElement.addEventListener('click', work3);

setTimeout(function () {
    btnElement.removeEventListener('click', work2);
}, 3000)