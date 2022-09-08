var promise = new Promise (
    function (resolve, reject) {
        resolve('Ngoc Tan');
    }
);

promise
    .then (function (name) {
        console.log(name, "is handsome!");
    })
    .catch (function (error) {
        console.log("error:", error);
    })
    .finally (function (result) {
        console.log("Done:", result)
    })