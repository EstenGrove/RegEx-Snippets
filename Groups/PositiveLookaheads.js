/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 03 2019
 *  File : PositiveLookaheads.js
 *******************************************/
////////////////////////////////////////////////////////
//GROUPS WITH "LOOKAHEAD": meaning a set of characters has to be followed by another matching set of characters

//Example 1.

// The regex 
const group1 = /foo(?=bar)/;

// The string to test
const testFoo = 'foo';

// Run test
console.log('Lookahead: ' + group1.test(testFoo)); // false


//Example 2. -  same regex
const testFoobar = 'foobar';
console.log('Lookahead: ' + group1.test(testFoobar)); // true

// In Example 2 the regex is looking for the string 'foo' once that is found then it checks to make sure it is followed by the string 'bar' immediately after. If there were a space after 'foo' or some other character in between it would return false, as the whole both character sets need to match entirely.

//Example 3. 

// The regex
const group2 = /(a(?=+)/;

const testCase = 'dge+';
console.log('Ex.3: ' + group2.test(testCase));