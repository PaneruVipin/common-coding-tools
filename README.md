# common-coding-tools

While working with JavaScript and JavaScript Framework, many hooks have to be made which are common, so they are all present here in the same library, so use them and avoid time and code repetition.

## Getting Started
```javascript
npm install common-coding-tools
```


### Usage

The `search` function takes three arguments: the array to search, an array of object keys to search, and the search query. It returns an array of objects that match the search query.

Here is an example of how to use the `search` function:

```javascript
const {search} = require("common-coding-tools/array");
//OR
import {search} from "common-coding-tools/array"

const arr = [
  {name: "vipin bhai", class: "vipin hello"},
  {name: "bhole bhai", class: "vipin dghhhh"},
  {name: "prem bhai", class: "singh hello"},
  {name: "singh bhai", class: "vipin hello"},
  {name: "vipin bhai", class: "vipin hello"},
];

const results1 = search(arr, ["name", "class"], "singh");
const results2 = search(arr, ["class", "name"], "singh");
console.log(results1);
// Output: [ {name: "singh bhai", class: "vipin hello"},{name: "prem bhai", class: "singh hello"}]
console.log(result2)
// Output: [{name: "prem bhai", class: "singh hello"}, {name: "singh bhai", class: "vipin hello"}]

// Why this difference in output?
// Because you have changed the array of object keys. The priority is decided according to the position of the key. 
// For example, your object has three keys A, B and C. 
// If you want to give first priority to B, second to C and third priority to A, then write like this
// ["B","A","C"]

// const yourResult=search(yourArray,["B","A","C"],"your query")
```

Here is an example of how to use the `descending` function:
```javascript
var {descending} = require("common-coding-tools/array")

const arr = [
  {name: "vipin bhai", class: "vipin hello"},
  {name: "bhole bhai", class: "vipin dghhhh"},
  {name: "prem bhai", class: "singh hello"},
  {name: "singh bhai", class: "vipin hello"},
  {name: "vipin bhai", class: "vipin hello"},
];

// Sort the array in descending order by the name property
const sortedArr = descending(arr, "name");

console.log(sortedArr); 
// [
//   {name: "vipin bhai", class: "vipin hello"},
//   {name: "vipin bhai", class: "vipin hello"},
//   {name: "singh bhai", class: "vipin hello"},
//   {name: "prem bhai", class: "singh hello"},
//   {name: "bhole bhai", class: "vipin dghhhh"},
// ]

```
other examples:
```javascript
var {descending} = require("common-coding-tools/array")

const arr = [5, 2, 8, 1, 9];

// Sort the array in descending order using the default comparison function
const sortedArr = descending(arr);

console.log(sortedArr);
// [9, 8, 5, 2, 1]
```

Here is an example of how to use the `ascending` function:

```javascript
var {ascending} = require("common-coding-tools/array")

const arr = ["a", "c", "d", "f", "b"];

// Sort the array in ascending order using the default comparison function
const sortedArr = ascending(arr);

console.log(sortedArr);

// ["a","b","c","d","f"]
```





