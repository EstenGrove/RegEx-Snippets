/******************************************
 *  Author : Esten Grove   
 *  Created On : Tue Feb 05 2019
 *  File : CheckEmailFormat.js
 *******************************************/

/////////////////////////////////////////////////////
// CHECK FOR EMAIL FORMAT

// Methods for checking email format
const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const altEmailReg = /\w+@+\w{1,}.+/i;
const listedReg = /[a-z0-9\#|$|!|@|%|^|&|*|)|(|)]+@+[a-z]+.+(com|net|us|org|io|co.uk|fm|cn|fr|ru|it|de|com.mx)/;
const basicEmailReg = /\S+(@)+\S+.(?=\S*)/;
// "listedReg" literally goes thru and lists all the possibilities for domain extensions and characters to check if the string is valid email format. Only useful if checking for a very specific domain like to block all ".ru" emails or something.

// Test cases
const tc1 = 'georgioGrammand99@gmail.com';
const tc2 = 'bunnyFluffer233@yahoo.com';
const tc3 = 'sdkj$245';
const tc4 = 'treuvue#$d@hotmail.ru';

// Run tests. This is the most accurate for the most test cases.
console.log(emailReg.test(tc1)); // true
console.log(emailReg.test(tc2)); // true
console.log(emailReg.test(tc3)); // false
console.log(emailReg.test(tc4)); // false

// Run tests for alternate regex
console.log(altEmailReg.test(tc1)); // true
console.log(altEmailReg.test(tc2)); // true
console.log(altEmailReg.test(tc3)); // false
console.log(altEmailReg.test(tc4)); // true

// Run tests for 3rd alt regex
console.log(listedReg.test(tc1)); // true
console.log(listedReg.test(tc2)); // true
console.log(listedReg.test(tc3)); // false
console.log(listedReg.test(tc4)); // true