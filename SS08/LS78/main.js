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


console.log('author\n',author);
console.log('user\n',user);

console.log('\n=============== Before add prototype ===============');
console.log('author.className\t\t:', author.className);
console.log('user.className\t\t\t:', user.className);

console.log('\n================ After add prototype ===============');
User.prototype.className = 'F8';
console.log('User.prototype.className = \'F8\';');
console.log('author.className\t\t:', author.className);
console.log('user.className\t\t\t:', user.className);
console.log('User.prototype[\'status\'] = \'Basic\';')
User.prototype['status'] = 'Basic';
console.log('author.status\t\t\t:', author.status);
console.log('user.status\t\t\t\t:', user.status);
var coinKey = 'coin';
console.log('Variable coinKey =', coinKey);
console.log('User.prototype[coinKey] = 0;')
User.prototype[coinKey] = 0;
console.log('author.coin\t\t\t\t:', author.coin);
console.log('user.coin\t\t\t\t:', user.coin);