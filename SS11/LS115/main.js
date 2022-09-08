function arrToObj(array) {
  return array.reduce(function(result, item) {
    return {
      [result[0]]: result[1],
      [item[0]]: item[1],
    };
  });
};

// Expected results:
var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
