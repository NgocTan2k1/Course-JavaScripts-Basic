const sum = (a,b) => a + b;
console.log(sum(10, 11));
const MyInfo = (name, age, address) => ({name: name, age: age, address: address});
console.log(MyInfo("Ngoc Tan", 21, 'Quang Ngai'));
const blog = (message) => console.log(message);

const Course = (name,price) => {
    this.name = name;
    this.price = price;
    return this;
}

console.log(new Course('JavaScript', 100));