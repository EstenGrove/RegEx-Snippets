/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 03 2019
 *  File : NegativeLookaheads.js
 *******************************************/

////////////////////////////////////////////////////////////////////////////////////////
// NEGATIVE LOOKAHEADS

// Negative Lookaheads check to match a single or set of characters ONLY if another set of characters DOES NOT FOLLOW the first set. So, if setA matches AND IS NOT followed by setB, then true. Else false.


//Example 1
const reg = /foo(?!bar)/;

//Test Cases
const foobar = 'foobar';
const foobaz = 'foobaz';

//Run tests
console.log('Ex1-foobar: ' + reg.test(foobar)); // false
console.log('Ex1-foobaz: ' + reg.test(foobaz)); // true

//The Above 'reg' will return true if "foo" IS NOT FOLLOWED by "bar"