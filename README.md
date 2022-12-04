# common-coding-tools

A brief description of the project and its purpose.

## Getting Started
```javascript
npm install common-coding-tools
```


### Usage

The `search` function takes three arguments: the array to search, an array of object keys to search, and the search query. It returns an array of objects that match the search query.

Here is an example of how to use the `search` function:

```javascript
var {search} = require("common-coding-tools/array");

var arr = [
  {name: "vipin bhai", class: "vipin hello"},
  {name: "bhole bhai", class: "vipin dghhhh"},
  {name: "prem bhai", class: "singh hello"},
  {name: "singh bhai", class: "vipin hello"},
  {name: "vipin bhai", class: "vipin hello"},
];

var results = search(arr, ["name", "class"], "singh");

console.log(results);
// Output: [ {name: "singh bhai", class: "vipin hello"},{name: "prem bhai", class: "singh hello"}]

