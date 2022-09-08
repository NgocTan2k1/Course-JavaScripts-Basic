// Viết hàm tại đây
function getLastElement(array) {
    var animal = array.pop();
    array.push(animal);
    return array.slice(-1, 0).toString();
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']