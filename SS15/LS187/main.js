function Blog1(message) {
    if(typeof message === 'undefined') { message = 'Ngoc Tan is very handsome!'; }
    console.log(message);
}

Blog1("Ngoc Tan is handsome!");
Blog1();

function Blog(message = 'Ngoc Tan is Very Handsome!') {
    console.log(message);
}
Blog("Ngoc Tan is Very Handsome!!!");
Blog();
