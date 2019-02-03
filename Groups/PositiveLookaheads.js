/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 03 2019
 *  File : PositiveLookaheads.js
 *******************************************/
////////////////////////////////////////////////////////
// POSITIVE LOOKAHEADS

// Positive Lookaheads will return true if a group of characters IS FOLLOWED by another group of characters. So, if groupA matches AND IS FOLLOWED BY groupB, then true. Else false.

//Example 1.
const reg1 = /foo(?=bar)/;
const foo = 'foo';
// Run test
console.log('Ex1-foo: ' + reg1.test(foo)); // false


//Example 2. -  same regex
const foobar = 'foobar';
console.log('Ex2-foobar: ' + reg1.test(foobar)); // true

// In Example 2 the regex is looking for the string 'foo' once that is found then it checks to make sure it IS FOLLOWED BY the string 'bar' immediately after. If there were a space after 'foo' or some other character in between it would return false, as the both character sets need to match entirely.


//Example 3. 
const reg2 = /[a-z](?=\+)/;
const testCase = 'dge+';
console.log('Ex3-testCase: ' + reg2.test(testCase)); // true

// Example 3 resolve true as it is looking for any letter immediately followed by a plus sign