function run(fruits) {
    var result;

    switch
    (fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default:
    }

    return result;
}

console.log(run('Banana'));
console.log(run('Apple'));