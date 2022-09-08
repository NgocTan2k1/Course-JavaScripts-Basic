console.log("print from 1 to 5");
for(var i = 0; i < 10; i++) {
    console.log(i);
    if(i >= 5) {
        break;
    }
}


console.log("print divisible by 2 from 1 to 10");
for(var i = 0; i <= 10; i++) {
   if(i % 2 !== 0) {
        continue;
   }
   console.log(i)
}