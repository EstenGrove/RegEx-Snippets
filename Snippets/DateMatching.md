# Matching Date Formats


## Match ```MM/DD/YYYY``` Format
```javascript
const regex = /[0-9]{2}(\/)[0-9]{2}(\/)[0-9]{4}/gmi;

// matches: 10/29/2019 format
```

## Matches ```YYYY-MM-DD``` Form

```javascript
const regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/gmi;

// matches: 2019-10-29 format
```
