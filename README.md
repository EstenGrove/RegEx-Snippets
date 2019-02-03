## RegEx-Snippets
A collection of helpful RegEx snippets, like captures and groups and plenty of complex patterns.

---------------------------

### Cheat-Sheet:

Anything inside of / / is what is to be tested for	
#### Symbols
* . — (period) Matches any single character, except for line breaks.(new line)
* * — Matches the preceding expression 0 or more times.
* + — Matches the preceding expression 1 or more times.
* ? — Preceding expression is optional (Matches 0 or 1 times).
* ^ — Matches the beginning of the string.
* $ — Matches the end of the string.
#### Character groups
* \d  — Matches any single digit character. Same as [0-9]
* \D — Any character that’s NOT a digit
* \w — Matches any word character (alphanumeric & underscore).
* \W— Any non-alphanumeric character
* \s — Matches any whitespace character(space, tab, new line, and similar)
* \S — Any non-whitespace character
* [XYZ] — Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z] 
* [XYZ]+ — Matches one or more of any of the characters in the set.
* [^A-Z] — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.
#### Flags
* There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.
* g — Global search
* i — case insensitive search
#### Groups
* (...) - Anything contained within parenthesis will be the search expression. 
* ###### Positive Lookaheads
  * This will search for two different groups of characters. 
  * It will only return true if "groupA" of characters IS FOLLOWED BY "groupB".
    * Ex: const reg = /foo(?=bar)/;
    * Then to test you could run: 
      * /foo(?=bar)/.test(someString);  ###### OR
      * reg.test(someString);
* ###### Negative Lookaheads
  * Like Postives, will search for two different groups HOWEVER, it will only return a match if the first group of characters IS NOT FOLLOWED by the second group of characters. 
    * Ex: const reg = /foo(?!bar)/;
    * Then to test you could run:
      * /foo(?!bar)/.test(someString);  ###### OR
      * reg.test(someString);
        * This will only return a match if "foo" exists and IS NOT FOLLOWED BY "bar".
#### Advanced
* (x) — Capturing Parenthesis: Matches x and remembers it so we can use it later.
* (?:x) — Non-capturing Parenthesis: Matches x and does not remembers it.
* x(?=y) — Lookahead: Matches x only if it is followed by y.
* ^ — Inverted search. Any character that is NOT in the included search(so search for everything EXCEPT what is included in the RegEx)
  * Ex. let nonBinary = /[^01]/;
    * This will match anything except 1s and 0s
