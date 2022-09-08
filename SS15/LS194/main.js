var obj = {
    name: "Ngoc Tan",
    cat: {
        name: "Ngoc",
        cat2: {
            name: "Tan",
            // cat3: {
            //     name: "Handsome",
            // }
        }
    }
}

if( obj.cat &&
    obj.cat.cat2 &&
    obj.cat.cat2.cat3
) {
    console.log(obj.cat.cat2.cat3.name);
}

if(obj?.cat?.cat2?.cat3) {
    console.log(obj.cat.cat2.cat3.name);
}