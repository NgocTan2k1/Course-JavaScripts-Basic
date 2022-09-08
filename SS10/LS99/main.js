// Làm bài
function run(object) {
    var array = [];
    for(var key in object) {
        array.push('Thuộc tính \'' + key + '\' có giá trị là ' + object[key]);
    }
    return array;
}



// Kỳ vọng
console.log(run({ name: 'Ngoc Tan', age: 21, address: 'Quang Ngai, VN' }));
// Output:
// [
//     "Thuộc tính 'name' có giá trị Ngoctan",
//     "Thuộc tính 'age' có giá trị 21",
//     "Thuộc tính 'address' có giá trị Quang Ngai, VN"
// ]