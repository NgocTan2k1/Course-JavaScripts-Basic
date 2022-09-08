var i = 0;
var isSuccess = false;
console.log(!isSuccess);



do {
    i++;
    console.log('No Success ' + i);

    if(true){
        isSuccess = true;
    }

} while(!isSuccess && i <= 3);