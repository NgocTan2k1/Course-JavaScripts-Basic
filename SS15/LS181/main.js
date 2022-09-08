{
    console.log("========== Code Block 1 ==========");
    console.log("{");
    console.log("\tvar course = 'JS';");
    var course = 'JS';
    console.log("\tlet name = 'Ngoc Tan';");
    let name = 'Ngoc Tan';
    console.log("\tconst age = 21; ");
    const age = 21; 
    {   

        console.log("\t========== Code Block 2 In Code Block 1 ==========");
        console.log("\t{");
        console.log("\t\tconst age = 33; ");
        const age = 33;
        console.log("\t\tlet name = 'Ngoc Tan';");
        let name = 'Pham Ngoc Tan';

        console.log("\t\t");
        console.log("\t\tcourse \t:", course);
        console.log("\t\tname \t:", name);
        console.log("\t\tage \t:", age);

        console.log("\t\tvar course = 'JavaScript';");
        var course = 'JavaScript';
        

        console.log("\t\tcourse \t:", course);
        console.log("\t\tname \t:", name);
        console.log("\t\tage \t:", age);
        console.log("\t}");
    }
    console.log("\tcourse \t:", course);
    console.log("\tname \t:", name);
    console.log("\tage \t:", age);
    console.log("}");
}
console.log("========== Out Code Block ==========");
console.log("course \t:", course);
// console.log("name \t:", name);
// console.log("age \t:", age);

console.log("");
console.log("Example");
console.log("var a = 10;");
var a = 10;
console.log("let b = 20;");
let b = 20;
console.log("const c = 30;");
const c = 30;
console.log("a = 1;");
a = 1;
console.log("b = 2;");
b = 2;
console.log("c = 3;// error");
// c = 3;
console.log('a\t:', a);
console.log('b\t:', b);
console.log('c\t:', c);