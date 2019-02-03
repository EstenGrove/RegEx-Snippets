/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 03 2019
 *  File : NamedGroups.js
 *******************************************/

////////////////////////////////////////////////////////
// NAMED GROUPS

const testStr = 'Hi i am Sally';

const reg1 = /(?<name>Sally)/;

console.log(reg1.test(testStr));