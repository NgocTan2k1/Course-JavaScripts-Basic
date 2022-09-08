var numbers = [1, 2, 3, 4, 5];
var results = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log('results = numbers.reduce((total, number) => { return total + number;},0)');
console.log('results\t:', results);

console.log('results = numbers.reduce((total, number) => { return total + number;})');
results = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log('results\t:', results);

console.log('===================== reduce2 =====================');
Array.prototype.reduce2 = function(callback, result) {
  let i = 0;
  if(arguments < 2) {
    i++;
    result = this[0];
  }
  for(; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
}

results = numbers.reduce2((total, number) => {
  return total + number;
}, 0);
console.log('results = numbers.reduce2((total, number) => { return total + number;},0)');
console.log('results\t:', results);

console.log('results = numbers.reduce2((total, number) => { return total + number;})');
results = numbers.reduce2((total, number) => {
  return total + number;
}, 0);
console.log('results\t:', results);

