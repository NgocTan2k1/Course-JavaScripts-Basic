function highLight(...rest) {
    console.log(rest);
}
var brand = "F8";
var course = "JavaScript";
highLight`Learn Programing ${course} at ${brand}!`;

function HighLight([first, ...strings], ...values) {
    return values.reduce( 
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]
    ).join('');
}
var htmls = HighLight`Learn Programing ${course} in ${brand}!`;
console.log(htmls);

