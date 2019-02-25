//////////////////////////////////
// RegEx Patterns & Snippets


// Extract all matches to an array

// test cases
const tc1 = 'Test some tEsT other test';
const tc2 = 'testicles, wallet tes John testing';

// RegEx to Match
const reg = /test/gi;

// Run test
const matches1 = tc1.match(reg);
const matches2 = tc2.match(reg);

console.log(matches1); // ['Test', 'tEsT', 'test']
console.log(matches2); // ['test', 'test']



// Match any character with the "." wildcard operator
const tc = 'fat cat in a hat';

const reg1 = /.at/gi;

const any = tc.match(reg1);

console.log(any); // ['fat', 'cat', 'hat']


// Match a single character with several possibilites
const tcSeveral = 'Fat cat in a hat';

const reg2 = /[cfh]at/gi;

const matchCFH = tcSeveral.match(reg2);

console.log(matchCFH);



// Match a Set of Characters you DON'T Want
const allCharsNoVowels = /[^aeiou]/gi;

const allCharsNoVowelsNoNums = /[^aeiou0-9]/gi;


// Match all letters & numbers
const longHand = /[a-z0-9]+/gi;

const shortHand = /\w+/gi;

const testNums = '423';

const testLetters = '$^*^love&';

console.log(longHand.test(testNums)); // true
console.log(shortHand.test(testLetters)); // true

console.log(longHand.test(testNums)); // true
console.log(shortHand.test(testNums)); // true