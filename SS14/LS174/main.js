// function sleep(ms) {
//     return new Promise (
//         function(resolve) {
//             setTimeout(resolve, ms);
//         }
//     );
// };

// function sleeperror(ms) {
//     return new Promise (
//         function(resolve, reject) {
//             reject('Error!!!');
//         }
//     );
// };

// var stop;

// function stopInterval() {
//     clearInterval(stop);
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(2000);
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(3000);
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(4000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(5000);
//     })
//     .then(function() {
//         console.log(5);
//         return sleeperror(2000);
//     })
//     .catch(function(data) {
//         stop = setInterval(function() {
//             console.log(data);
//         }, 1000);
//         return;
//     });

var promiseResolve1 = new Promise(
    function(resolve, reject) {
        resolve("Success1!");
    } 
);

var promiseReject1 = new Promise(
    function(resolve, reject) {
        reject("Error1!");
    } 
);

promiseResolve1
    .then(function(data) {
        console.log("promiseResolve =>");
        console.log(data);
    })
    .catch(function(data) {
        console.log(data);
    })
    .finally(function() {
        console.log("DONE promiseResolve1!")
    })
;

promiseReject1
    .then(function(data) {
        console.log(data);
    })
    .catch(function(data) {
        console.log("promiseReject =>");
        console.log(data);
    })
    .finally(function() {
        console.log("DONE promiseReject1!")
    })
;

var promiseResolve2 = Promise.resolve("Success2!");
var promiseReject2 = Promise.reject("Error2!");

promiseResolve2
    .then(function(data) {
        console.log("promiseResolve =>");
        console.log(data);
    })
    .catch(function(data) {
        console.log(data);
    })
    .finally(function() {
        console.log("DONE promiseResolve2!")
    });
;

promiseReject2
    .then(function(data) {
        console.log(data);
    })
    .catch(function(data) {
        console.log("promiseReject =>");
        console.log(data);
    })
    .finally(function() {
        console.log("DONE promiseReject2!")
    });
;

var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            return resolve([1, 2]);
        }, 2000);
    }
);

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            return resolve([3, 4]);
        }, 6000);
    }
);

var promise3 = new Promise(
    function(resolve, reject) {
        setTimeout(function() {
            return reject([9, 10]);
        }, 8000);
    }
);

var promise4 = new Promise(
    function(resolve, reject) {
        setTimeout(function() {
            return reject([12, 14]);
        }, 8000);
    }
);

Promise.all([promise1, promise2])
    .then(function(result) {
        console.log(result);
    })
;

Promise.all([promise1, promise2])
    .then(function(result) {
        console.log('========== 1 ==========');
        console.log(result[0].concat(result[1]));
    })
;

Promise.all([promise1, promise2])
    .then(function([result1, result2]) {
        console.log('========== 2 ==========');
        console.log(result1.concat(result2));
    })
;   

Promise.all([promise1, promise2, promise3, promise4])
    .then(function([result1, result2, result3]) {
        console.log('========== 3 ==========');
        console.log(result1.concat(result2).concat(result3));
    })
    .catch(function(result3) {
        console.log('========== 3 ==========');
        console.log(result3);
    })
;   




