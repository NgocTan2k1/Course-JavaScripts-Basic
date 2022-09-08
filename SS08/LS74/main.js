var myInfo = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
};
console.log('My Info:\n', myInfo);

//======================== Add key ========================
console.log('\n======================== Add key ========================');
var newMyInfoAddKey = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
};
console.log('My Info:\n', myInfo);

console.log('\nnewMyInfoAddKey.email\t\t\t\t\t\t= \'phamngoctan2016@gmail.com\';');
newMyInfoAddKey.email = 'phamngoctan2016@gmail.com';

console.log('newMyInfoAddKey[\'number\']\t\t\t\t\t= \'0386158494\';');
newMyInfoAddKey['number'] = '0386158494';

console.log('newMyInfoAddKey[\'height\'];');
newMyInfoAddKey['height'];

console.log('newMyInfoAddKey.height;');
newMyInfoAddKey.height;

console.log('New Info:\n', newMyInfoAddKey);

//======================= Get value =======================
console.log('\n======================= Get value =======================');
console.log('My Info:\n', myInfo);
console.log('\n\nmyInfo.name\t\t\t\t\t\t\t\t\t:', myInfo.name);
console.log('myInfo[\'name\']\t\t\t\t\t\t\t\t:', myInfo.name);
console.log('myInfo.age\t\t\t\t\t\t\t\t\t:', myInfo.age);
console.log('myInfo[\'age\']\t\t\t\t\t\t\t\t:', myInfo.age);
console.log('myInfo.address\t\t\t\t\t\t\t\t:', myInfo.address);
console.log('myInfo[\'address\\t\t\t\t\t\t\t\t:', myInfo.address);

console.log("myInfo.height\t\t\t\t\t\t\t\t:", myInfo.height);
console.log('myInfo[\'height\']\t\t\t\t\t\t\t:', myInfo['height']);

//== Add key for object by key name is value of variable ==
console.log('\n== Add key for object by key name is value of variable ==');
var newMyInfoToAddKeyByVariable = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
};
console.log('My Info\t\t:', myInfo);

var emailKey = 'email';
var numberKey = 'number';
var heightKey = 'height';
var weightKey = 'weight';
var sexKey = 'sex';

console.log('\nemailKey\t\t\t\t\t\t\t\t\t:', emailKey);
console.log('heightKey\t\t\t\t\t\t\t\t\t:', heightKey);
console.log('weightKey\t\t\t\t\t\t\t\t\t:', weightKey);
console.log('sexKey\t\t\t\t\t\t\t\t\t\t:', sexKey);
console.log('numberKey\t\t\t\t\t\t\t\t\t:', numberKey);

console.log('\n\nnewMyInfoToAddKeyByVariable[emailKey]\t\t= \'phamngoctan2016@gmail.com\';');
newMyInfoToAddKeyByVariable[emailKey] = 'phamngoctan2016@gmail.com';

console.log('newMyInfoToAddKeyByVariable[heightKey]\t\t= 1.75;');
newMyInfoToAddKeyByVariable[heightKey] = 1.75;

console.log('newMyInfoToAddKeyByVariable[weightKey]\t\t= 77;');
newMyInfoToAddKeyByVariable[weightKey] = 77;

console.log('newMyInfoToAddKeyByVariable[sexKey]\t\t\t= \'male\';');
newMyInfoToAddKeyByVariable[sexKey] = 'male';

console.log('newMyInfoToAddKeyByVariable[numberKey]\t\t= \'0386158494\';');
newMyInfoToAddKeyByVariable[numberKey] = '0386158494';

console.log('New Info\t:', newMyInfoToAddKeyByVariable);

//=== Get value of key by key name is value of variable ===
console.log('\n=== Get value of key by key name is value of variable ===');

var myKey = 'name';
console.log('myKey\t\t\t\t\t\t\t\t\t\t:', myKey);
console.log('myInfo[myKey]\t\t\t\t\t\t\t\t:', myInfo[myKey]);

myKey = 'age';
console.log('\nmyKey\t\t\t\t\t\t\t\t\t\t:', myKey);
console.log('myInfo[myKey]\t\t\t\t\t\t\t\t:', myInfo[myKey]);

myKey = 'address';
console.log('\nmyKey\t\t\t\t\t\t\t\t\t\t:', myKey);
console.log('myInfo[myKey]\t\t\t\t\t\t\t\t:', myInfo[myKey]);

//============= Delete Key and Value of Object ============
console.log('\n============= Delete Key and Value of Object ============');
var newMyInfoBeforeDeleteKey = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
    email: 'phamngoctan2016@gmail.com',
    weight: 77,
    height: 1.75,
    sex: 'male',
    number: '0386158494'
};

var newMyInfoAfterDeleteKey = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
    email: 'phamngoctan2016@gmail.com',
    weight: 77,
    height: 1.75,
    sex: 'male',
    number: '0386158494'
};



console.log('My Info Before Delete:\n', newMyInfoBeforeDeleteKey);

console.log('delete newMyInfoAfterDeleteKey.sex\t\t\t:', delete newMyInfoAfterDeleteKey.sex);

console.log('delete newMyInfoAfterDeleteKey[numberKey]\t:', delete newMyInfoAfterDeleteKey[numberKey]);

console.log('delete newMyInfoAfterDeleteKey.weight\t\t:', delete newMyInfoAfterDeleteKey.weight);

console.log('delete newMyInfoAfterDeleteKey[emailKey]\t:', delete newMyInfoAfterDeleteKey[emailKey]);

console.log('My Info To Delete\t:', newMyInfoAfterDeleteKey);


//=================== Function of Object ==================
console.log('\n=================== Function of Object ==================');
var myInfoFunctionSTART = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
    getName: function() {
        return this.name;
    }
};

var myInfoFunctionEND = {
    name: "Ngoc Tan",
    age: 21,
    'address': 'Quang Ngai',
    getName: function() {
        return this.name;
    }
};

console.log('My Info:\n', myInfoFunctionSTART);
console.log('myInfoFunctionSTART.getName:\n',myInfoFunctionSTART.getName);
console.log('myInfoFunctionSTART.getName()\t\t\t\t:',myInfoFunctionSTART.getName());

myInfoFunctionEND.getAge = function() {
    return this.age;
}

var getAddressKey = 'getAddressKey';
myInfoFunctionEND[getAddressKey] = function() {
    return this.address;
}

console.log('\nmyInfoFunctionEND.getAge:\n',myInfoFunctionEND.getAge);
console.log('myInfoFunctionEND[getAddressKey]:\n',myInfoFunctionEND[getAddressKey]);
console.log('myInfoFunctionEND.getAge()\t\t\t\t\t:',myInfoFunctionEND.getAge());
console.log('myInfoFunctionEND[getAddressKey]()\t\t\t:',myInfoFunctionEND[getAddressKey]());

console.log('\nMy Info:\n', myInfoFunctionEND);

///////////////////////////////////////////////////////////////////
console.log('\n\n\n/////////////////////////////////////////////////////');
console.log('Function in object\t\t: Method')
console.log('Variable(key) in object\t: Property')







