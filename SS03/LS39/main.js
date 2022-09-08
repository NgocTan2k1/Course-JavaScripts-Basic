var a = '';     // false => Falsy
var b = 0;      // false => Falsy
var c = [];     // true => Truthy
var d = 1 > 2;  // false => Falsy
var e = {};     // true => Truthy
var f = '0';    // true => Truthy 

/**
            operator &&
    result = a1 && a2 && ... && an
  - a1 --> an
  - Nếu ai thuộc Falsy thì gán ai cho result và dừng
  - Nếu với mọi ai không thuộc Falsy thì gán an cho result.
*/
var result = 'A' && 'b' && null && NaN && 'C';
console.log('&& result: ', result);

/**
            operator ||
    result = a1 || a2 || ... || an
  - a1 --> an
  - Nếu ai không thuộc Falsy thì gán ai cho result
  - Nếu với mọi ai thuộc Falsy thì gán an cho result.
 */

var result = 0 || false || 'Tân đẹp trai' || NaN || 'C';
console.log('|| result: ', result);