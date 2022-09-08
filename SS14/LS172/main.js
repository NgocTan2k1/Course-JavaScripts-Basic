var promise = new Promise (
    function (resolve, reject) {
        resolve('Ngoc Tan');
    }
);

promise
    .then (function (name) {
        console.log(name, "is handsome!");
        return 1;
    })
    .then (function (data) {
        console.log(data);
        return 2;
    })
    .then (function (data) {
        console.log(data);
        return 3;
    })
    .then (function (data) {
        console.log(data);
    })
    .catch (function (error) {
        console.log("error:", error);
    })
    .finally (function () {
        console.log("Done!")
    });
 
function sleep(ms) {
    return new Promise (
        function(resolve) {
            setTimeout(resolve, ms);
        }
    );
};

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(2000);
    })
    .then(function() {
        console.log(2);
        return sleep(3000);
    })
    .then(function() {
        console.log(3);
        return sleep(4000);
    })
    .then(function() {
        console.log(4);
        return sleep(5000);
    })
    .then(function() {
        console.log(5);
        return sleep(2000);
    })
    .catch(function() {
        return;
    })
    .finally (function () {
        console.log("Done!")
    });

