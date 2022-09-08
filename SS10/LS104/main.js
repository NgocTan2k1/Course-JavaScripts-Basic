var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
];

var arrayLength = myArray.length;
for(var i = 0; i < arrayLength; i++) {
    for(var j = 0; j< myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}