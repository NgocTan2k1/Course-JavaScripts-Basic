console.log("========== JavaScript convert JSON ==========");
var json = '1';
console.log('json\t\t\t\t\t:', json);
console.log('typeof json\t\t\t\t:',typeof json);
console.log('JSON.parse(json)\t\t:', JSON.parse(json));
console.log('typeof JSON.parse(json)\t:',typeof JSON.parse(json));
var javascriptNumber = JSON.parse(json);

json = 'true';
console.log("");
console.log('json\t\t\t\t\t:', json);
console.log('typeof json\t\t\t\t:',typeof json);
console.log('JSON.parse(json)\t\t:', JSON.parse(json));
console.log('typeof JSON.parse(json)\t:',typeof JSON.parse(json));
var javascriptBoolean1 = JSON.parse(json);

json = 'false';
console.log("");
console.log('json\t\t\t\t\t:', json);
console.log('typeof json\t\t\t\t:',typeof json);
console.log('JSON.parse(json)\t\t:', JSON.parse(json));
console.log('typeof JSON.parse(json)\t:',typeof JSON.parse(json));
var javascriptBoolean2 = JSON.parse(json);

json = '"Ngoc Tan"';
console.log("");
console.log('json\t\t\t\t\t:', json);
console.log('typeof json\t\t\t\t:',typeof json);
console.log('JSON.parse(json)\t\t:', JSON.parse(json));
console.log('typeof JSON.parse(json)\t:',typeof JSON.parse(json));
var javascriptString = JSON.parse(json);

json = '["JavaScript", "PHP", "Ruby"]';
console.log("");
console.log('json\t\t\t\t\t:', json);
console.log('typeof json\t\t\t\t:',typeof json);
console.log('JSON.parse(json):\n', JSON.parse(json));
console.log('typeof JSON.parse(json)\t:',typeof JSON.parse(json));
var javascriptArray = JSON.parse(json);

json = '{"name":"Ngoc Tan", "age":21}';
console.log("");
console.log('json\t\t\t\t\t:', json);
console.log('typeof json\t\t\t\t:',typeof json);
console.log('JSON.parse(json):\n', JSON.parse(json));
console.log('typeof JSON.parse(json)\t\t:',typeof JSON.parse(json));
var javascriptObject = JSON.parse(json);

console.log("========== JSON convert JavaScript ==========");
console.log('javascriptNumber\t\t\t\t\t\t\t:', javascriptNumber);
console.log('typeof javascriptNumber\t\t\t\t\t\t:',typeof javascriptNumber);
console.log('JSON.stringify(javascriptNumber)\t\t\t:', JSON.stringify(javascriptNumber));
console.log('typeof JSON.stringify(javascriptNumber)\t\t:',typeof JSON.stringify(javascriptNumber));

console.log("");
console.log('javascriptBoolean1\t\t\t\t\t\t\t:', javascriptBoolean1);
console.log('typeof javascriptBoolean1\t\t\t\t\t:',typeof javascriptBoolean1);
console.log('JSON.stringify(javascriptBoolean1)\t\t\t:', JSON.stringify(javascriptBoolean1));
console.log('typeof JSON.stringify(javascriptBoolean1)\t:',typeof JSON.stringify(javascriptBoolean1));

console.log("");
console.log('javascriptBoolean2\t\t\t\t\t\t\t:', javascriptBoolean2);
console.log('typeof javascriptBoolean2\t\t\t\t\t:',typeof javascriptBoolean2);
console.log('JSON.stringify(javascriptBoolean2)\t\t\t:', JSON.stringify(javascriptBoolean2));
console.log('typeof JSON.stringify(javascriptBoolean2)\t:',typeof JSON.stringify(javascriptBoolean2));

console.log("");
console.log('javascriptString\t\t\t\t\t\t\t:', javascriptString);
console.log('typeof javascriptString\t\t\t\t\t\t:',typeof javascriptString);
console.log('JSON.stringify(javascriptString)\t\t\t:', JSON.stringify(javascriptString));
console.log('typeof JSON.stringify(javascriptString)\t\t:',typeof JSON.stringify(javascriptString));

console.log("");
console.log('javascriptArray\t\t\t\t\t\t\t:', javascriptArray);
console.log('typeof javascriptArray\t\t\t\t\t\t:',typeof javascriptArray);
console.log('JSON.stringify(javascriptArray)\t\t:', JSON.stringify(javascriptArray));
console.log('typeof JSON.stringify(javascriptArray)\t\t:',typeof JSON.stringify(javascriptArray));

console.log("");
console.log('javascriptObject\t\t\t\t\t\t\t:', javascriptObject);
console.log('typeof javascriptObject\t\t\t\t\t\t:',typeof javascriptObject);
console.log('JSON.stringify(javascriptObject)\t\t\t:', JSON.stringify(javascriptObject));
console.log('typeof JSON.stringify(javascriptObject)\t\t:',typeof JSON.stringify(javascriptObject));