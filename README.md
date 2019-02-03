## RegEx-Snippets

A collection of helpful RegEx snippets, like captures and groups and plenty of complex patterns.

---

### Cheat-Sheet:

Anything inside of / / is what is to be tested for

#### Symbols

- . — (period) Matches any single character, except for line breaks.(new line)
- \* — Matches the preceding expression 0 or more times.
- + — Matches the preceding expression 1 or more times.
- ? — Preceding expression is optional (Matches 0 or 1 times).
- ^ — Matches the beginning of the string.
- \$ — Matches the end of the string.

#### Character Types

- \d  — Matches any single digit character. Same as [0-9]
- \D — Any character that’s NOT a digit
- \w — Matches any word character (alphanumeric & underscore).
- \W— Any non-alphanumeric character
- \s — Matches any whitespace character(space, tab, new line, and similar)
- \S — Any non-whitespace character

#### Groups and Ranges

- .: Any character except newline (\n)
- (a|b): a or b
- (…): Group
- (?:…): Passive (non-c­apt­uring) group
- [abc]: a, b or c
- [^abc]: Not a, b or c
- [a-z]: Letters from a to z
- [A-Z]: Uppercase letters from A to Z
- [0-9]: Digits from 0 to 9
- [XYZ] — Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z]
- [XYZ]+ — Matches one or more of any of the characters in the set.
- [^a-z] — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.

#### Flags

- There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.
- g — Global search
- i — case insensitive search

#### Groups

- (...) - Anything contained within parenthesis will be the search expression.
- #### Positive Lookaheads
  - This will search for two different groups of characters.
  - It will only return true if "groupA" of characters IS FOLLOWED BY "groupB".
    - Ex: const reg = /foo(?=bar)/;
    - Then to test you could run:
      - /foo(?=bar)/.test(someString); OR
      - reg.test(someString);
        - This will only return a match if "foo" exists AND IS FOLLOWED BY "bar".
- #### Negative Lookaheads
  - Like Postives, will search for two different groups.
  - It will only return a match if the first group of characters IS NOT FOLLOWED BY the second group of characters.
    - Ex: const reg = /foo(?!bar)/;
    - Then to test you could run:
      - /foo(?!bar)/.test(someString); OR
      - reg.test(someString);
        - This will only return a match if "foo" exists and IS NOT FOLLOWED BY "bar".

#### Advanced

- (x) — Capturing Parenthesis: Matches x and remembers it so we can use it later.
- (?:x) — Non-capturing Parenthesis: Matches x and does not remembers it.
- x(?=y) — Lookahead: Matches x only if it is followed by y.
- ^ — Inverted search. Any character that is NOT in the included search(so search for everything EXCEPT what is included in the RegEx)
  - Ex. let nonBinary = /[^01]/;
    - This will match anything except 1s and 0s
- {n} - Curly braces are used to set HOW MANY TIMES an operator is to be matched, or how many occurences to look for.
  - {n} - "n" represents how many times a character, expression or subexpression must occur.
    - Ex: {2} = means that a character or expression must occur 2 times.
  * {n, m} - "n" and "m" represent a range of the number of occurences an expression or character must occur.
    - Ex: {1, 4} - means that a specified character or expression must occur between 1 & 4 times.
  * {m, } - means that a character/expression must occur at least "m" times.
    - Ex: {3, } - means it should occur at least 3 times.
