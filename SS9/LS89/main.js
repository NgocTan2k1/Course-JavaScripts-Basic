var courses = {
    name: 'JavaScript',
    coin: 250
};

if(courses.coin > 0) {
    console.log(`${courses.coin} Coins`);
} else {
    console.log('Free');
}

var result = courses.coin > 0 ? `${courses.coin} Coins` : 'Free';
console.log('result\t:', result)

