function hell(value, callback) {
    callback(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    console.log("valueFromA\t:",valueFromA);
    hell(valueFromA + 1, function (valueFromB) {
        console.log("valueFromB\t:", valueFromB);
        hell(valueFromB + 1, function (valueFromC) {
            console.log("valueFromC\t:", valueFromC);
            hell(valueFromC + 1, function (valueFromD) {
                console.log("valueFromD\t:", valueFromD);
                console.log("valueFinally:",valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value);
    });




