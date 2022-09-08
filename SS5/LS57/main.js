var myString = 'Hoc JS tai F8!';

//======================= Length =======================
console.log("MyString: " + myString);
console.log('length of myString: '+ myString.length);
console.log("MyString was '" + myString + '\'');

//===================== Find index =====================

//indexof
console.log('===indexOf===');
console.log('Find index of \'JS\': ' + myString.indexOf('JS'));
console.log("MyString was '" + myString + '\'');

myString = 'Hoc JS JS JS JS tai F8! JS';
console.log("MyString: " + myString);
console.log(`Find index of \'JS\' start number ${myString.indexOf('JS') + 1}: ` + myString.indexOf('JS', myString.indexOf('JS') + 1));
console.log('Find last index of \'JS\': ' + myString.lastIndexOf('JS'));
console.log("MyString was '" + myString + '\'');

//search
console.log('Find last index of \'JS\' by search: ' + myString.search('JS'));
console.log("MyString was '" + myString + '\'');

//====================== Cut String =====================
myString = 'Ngoc Tan is handsome';
console.log("MyString: " + myString);
console.log('Cut string from 0 to 8: ' + myString.slice(0, 8));
console.log('Cut full string no parameter: ' + myString.slice());
console.log('Cut string with position start 5:' + myString.slice(5))
console.log("MyString was '" + myString + '\'');

//======================= Replace =======================
myString = 'Hoc JS tai khoa JS basic tai F8!';
console.log("MyString: " + myString);
console.log('Replace JS with myString.replace( \'JS\', \'JavaScript\'): \n => ' + myString.replace('JS', 'JavaScript'));
console.log('Replace JS with myString.replace( /JS/g, \'JavaScript\'): \n => ' + myString.replace(/JS/g, 'JavaScript'));
myString.replace()
console.log("MyString was '" + myString + '\'');

//================ Convert to Upper/Lower Case ===========
myString = 'Ngoc Tan is handsome';
console.log("MyString: " + myString);
console.log("MyString convert Upper Case: " + myString.toUpperCase());
console.log("MyString convert Lower Case: " + myString.toLowerCase());
console.log("MyString was '" + myString + '\'');

//======================== Trim ==========================
myString = '            Ngoc Tan is handsome           ';
console.log("MyString: " + myString + '\nLength of myString: ' + myString.length);
console.log("MyString was Trim: " + myString.trim() + '\nLength of myString: ' + myString.trim().length);
console.log("MyString was '" + myString + '\'' + '\nLength of myString: ' + myString.length);

//======================== Split ==========================
var language = 'JavaScript, PHP, Ruby';
console.log("MyString: " + language);
console.log("String convert Array by language.split(', ')\n");
console.log(language.split(', '));
console.log("String convert Array by language.split('')\n");
console.log(language.split(''))
console.log("MyString was '" + language + '\'');

//=================== Get character by index ===============
const myString2 = 'Ngoc Tan';
console.log("MyString: " + myString2);
console.log("Character of number index 5 by 'myString2.charAt(5)': ");
console.log(myString2.charAt(5));
console.log("Character of number index 20 by 'myString2.charAt(20)': ");
console.log(myString2.charAt(20));
console.log("Type of Character of number index 5 by ' typeof myString2.charAt(20)': ");
console.log(typeof myString2.charAt(20));
console.log("Character of number index 5 by 'myString2[5]': ");
console.log(myString2[5]);
console.log("Character of number index 20 by 'myString2[20]':");
console.log(myString2[20]);
console.log("Type of Character of number index 5 by ' typeof myString2[20]':");
console.log(typeof myString2[20]);
console.log("MyString was " + myString2);