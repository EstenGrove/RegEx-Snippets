## Useful RegEx Patterns and Tips

#### __Testing Multiple Patterns__
###### __Using the "OR" Operator "|"__
```javascript
const reg = /yes|no|maybe/
```

#### __Extract 1st Match to a Variable__
```javascript
const match = "testing".match(/test/i); // test
```
#### __Extract All Matches to a Variable__
```javascript
// Test case
const testCase = 'Testicles, are testing my patience';

// RegEx to match
const reg = /test/gi; // Using "gi" after the regex looks for Global matches that are case Insensitive.

// Run test and save in "matches"
const matches = testCase.match(reg);
```
### __Tricks For Matching Character Patterns__

#### __Match Any Character Using the "." Wildcard Operator__
```javascript
const tc = 'Fat cat in a hat';

const reg = /.at/gi;

const anyMatch = tc.match(reg); // ['Fat', 'cat', 'hat']
```
#### __Match A Single Character Followed by a Specific Set of Characters__
- Use "\[]" follwed by the desired pattern. Then use the "gi" flags.
```javascript
const tc = 'Fat cat in a hat';

const reg = /[cfh]at/gi;

const matchCFH = tc.match(reg); // ['Fat', 'cat', 'hat']
```
#### __Match Characters You DON'T Want__
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
