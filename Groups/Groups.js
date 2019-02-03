/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 03 2019
 *  File : Groups.js
 *******************************************/

////////////////////////////////
// REGEX: GROUPS

// String to test
const str = '+e+8839+g';

// On Regex literals, there's no need for quotes '' only the closing slashes //
const reg = /(\+[a-z]\+)/;

const reg2 = new RegExp(/(\+d\+)/gi);

//The above pattern with check for any letter surrounded by plus signs ie: +e+ or +g+ etc
console.log(reg.test(str)); // true
console.log(reg2.test(str)); // false