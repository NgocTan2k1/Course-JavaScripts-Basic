function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName}` + `${this.lastName}`
    }
}

var author = new User('Ngoc', 'Tan', 'Avatar');
var user = new User('Pham', 'Tan', 'Avatar');
console.log('=============== Check ===============');
console.log('author.constructor === User\t:', author.constructor === User);
console.log('user.constructor === User\t:', user.constructor === User);

author.title = 'This is Title';
user.comment = 'That is Great!!!';

console.log('author\n',author);
console.log('user\n',user);

console.log('============== GetName ==============');
console.log('author.getName()\t\t\t:', author.getName());
console.log('user.getName()\t\t\t\t:', user.getName());


