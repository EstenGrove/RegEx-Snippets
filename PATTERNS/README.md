## Useful RegEx Patterns and Tips

### Using .test() and .match()
- When using .test() the RegEx comes first and is passed the test case.
- When using .match() the test case is first and is passed the RegEx.
##### __.test()__
- Provides a boolean response
```javascript
// RegEx
/the/gi.test('the words'); // true
```
##### __.match()__
- Provides the actual string(s) that matches
```javascript
"the words".match(/the/gi); // ['the']
```

#### __Testing Multiple Patterns__
###### __Using the "OR" Operator__
- Use "|"
```javascript
const reg = /yes|no|maybe/
```

#### __Extract 1st Match to a Variable__
```javascript
const match = "testing".match(/test/i); // test
```
#### __Extract All Matches to a Variable__
- Use "gi" flags for all matches and case-insensitive.
```javascript
// Test case
const testCase = 'Testicles, are testing my patience';

// RegEx to match
const reg = /test/gi; // Using "gi" after the regex looks for Global matches that are case Insensitive.

// Run test and save in "matches"
const matches = testCase.match(reg);
```
### __Tricks For Matching Character Patterns__

#### __Match Any Character Using the Wildcard Operator__
- Use the "." operator. 
```javascript
const tc = 'Fat cat in a hat';

const reg = /.at/gi;

const anyMatch = tc.match(reg); // ['Fat', 'cat', 'hat']
```
#### __Match A Single Character Followed by a Specific Set of Characters__
- Use "\[ ]" follwed by the desired pattern. Then use the "gi" flags.
```javascript
const tc = 'Fat cat in a hat';

const reg = /[cfh]at/gi;

const matchCFH = tc.match(reg); // ['Fat', 'cat', 'hat']
```
#### __Match Characters You DON'T Want__
- Use "^" immediately before the characters to look for. The ones you DON'T want.
```javascript
const allCharsNoVowels = /[^aeiou]/gi;

const allCharsNoVowelNoNums = /[^aeiou0-9]/gi;
```
#### __Match a Character(s) One Or More Times__
- Use the "+" sign.
```javascript
const everyA = /a+/gi;
```
#### __Match Character(s) Zero or More Times__
- Use the "*" symbol
```javascript
const allI = /i*/gi;
```
#### __Lazy-Matching__
- Means matching the SMALLEST part of a string that meets the requirements. RegEx defaults to matching the LONGEST part of a string.
- Use the "?" symbol to match.
```javascript
const testCase = 'catastrophe';

// Will match the LONGEST part of a string with the requirements.
const defaultReg = /c[a-z]*t/gi;

// Will match the SMALLEST part of a string with the requirements.
const lazyReg = /c[a-z]*?t/gi;

testCase.match(defaultReg); // [ 'catast' ]
testCase.match(lazyReg); // [ 'cat' ]
```
#### __Match Patterns at the START of a String__
- Use the "^" character at the START of a pattern WITHOUT surrounding "\[ ]"
```javascript
// Test cases
const johnInFront = 'John is the guy for the job.';
const johnNotInFront = 'I figured John would be great.';

const checkAtStart = /^John/; 

johnInFront.match(checkAtStart); // true
johnNotInFront.match(checkAtStart); // false
```
#### __Match Patterns at the END of a String__
- Use the "$" at the END of pattern.
```javascript
// Test cases
const johnInFront = 'John is a good guy';
const johnInBack = 'We should hire John';

const checkAtEnd = /John$/;

johnInFront.test(checkAtEnd); // false
johnInBack.test(checkAtEnd); // true
```
#### __Match All Letters & Numbers In A Row__
- Use the "+" after the "\[ ]"
  - Without the "+" it will match the individual letters/numbers instead of the set of letters/numbers.
```javascript
// Test cases
const testLetters = '$^&((*^(so&(me^';
const testNums = '324';

const longHand = /[a-z0-9]+/gi;

const shortHand = /\w+/gi;

longHand.test(testLetters); // true. Using the "+" will match [ 'so', 'me' ]. Without "+" will match ['s', 'o', 'm', 'e']
shortHand.test(testLetters); // true. 

longHand.test(testNums); // true. Using the "+" will match ['324']. Without "+" will match ['3', '2', '4']
shortHand.test(testNums); // true
```
#### __Match Everything EXCEPT Letters and Numbers__
- Use the "\W" flag. Capital "W" WON'T look for letters or numbers.
```javascript
const noLettersNoNums = /\W/gi;
```
#### __Match All Numbers__
- Use the "\d" flag.
```javascript
const allNums = /\d/g;
```
#### __Match all NON-NUMBERS__
- Use the "\D" flag, with a capital "D".
```javascript
const noNums = /\D/g;
```
#### __Match white-space__
- Use the "\s" flag with a lowercase "s".
```javascript
const whiteSpace = /\s/g;
```
#### __Match NON-Whitespace__
- Use the "\S" flag with a capital "S".
```javascript
const noWhiteSpace = /\S/g;
```
#### __Match an Exact Number of Consecutive Character Occurences__
- Using "{number}"
```javascript
// Test cases
const test1 = 'formatting';
const test2 = 'Timber';

// RegEx
const twoT = /t{2}/gi;

// Run tests
twoT.test(test1); // true
twoT.test(test2); // false
```
