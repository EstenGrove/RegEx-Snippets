/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 03 2019
 *  File : CapturedGroups.js
 *******************************************/

////////////////////////////////////////////////////////////////////
//CAPTURING GROUPS

// Capturing Groups are helpful when you want to change or replace each group of characters with something else, or perhaps just remove/replace a single group in a set of groups. 

const reg = new RegExp(/(foo){1}/gim);

const foo = 'foo foofoo foo';
const test2 = '';


console.log(reg.test(foo)); // true: this will capture all four, separate groups of "test".

// Replace all instances of "test" in foo with "bar" and add a space if needed. This will fix the instance where "foofoo" is crammed together.
const replaced = foo.replace(reg, (str) => {
    str = 'foo';
    if (str == 'foo ') return 'bar';
    if (str == 'foo') return 'bar';
});
console.log(replaced);