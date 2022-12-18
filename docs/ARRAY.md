# common-coding-tools/array

There are common functions related to data in array page, by which you can easily implement and clean the data.

## Getting Started
```javascript
npm install common-coding-tools

```


### Usage
```javascript
const { search, descending, ascending, arrayToObject, ObjectToArray } = require("common-coding-tools/array");
//OR
import { search, descending, ascending, arrayToObject, ObjectToArray } from "common-coding-tools/array"
```

The `search` function takes three arguments: the array to search, an array of object keys to search, and the search query. It returns an array of objects that match the search query.

Here is an example of how to use the `search` function:

```javascript

const arr = [
  {name: "vipin bhai", class: "vipin hello"},
  {name: "bhole bhai", class: "vipin dghhhh"},
  {name: "prem bhai", class: "singh hello"},
  {name: "singh bhai", class: "vipin hello"},
  {name: "vipin bhai", class: "vipin hello"},
];

const results1 = search(arr, ["name", "class"], "singh");
// Output: [ {name: "singh bhai", class: "vipin hello"},{name: "prem bhai", class: "singh hello"}]

const results2 = search(arr, ["class", "name"], "singh");
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
// Sort the array in descending order by the name property
const sortedArr = descending(arr, "name"); 
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

const arr = [5, 2, 8, 1, 9];

// Sort the array in descending order using the default comparison function
const sortedArr = descending(arr);
// [9, 8, 5, 2, 1]
```

Here is an example of how to use the `ascending` function:

```javascript
import {ascending} from "common-coding-tools/array"

const arr = ["a", "c", "d", "f", "b"];

// Sort the array in ascending order using the default comparison function
const sortedArr = ascending(arr);
// ["a","b","c","d","f"]
```

Here is an example of how to use the `converter` function:

```javascript

// Convert the array into an object using the name property as the keys
const object = arrayToObject(arr, "name");
// {
//   "vipin bhai": {name: "vipin bhai", class: "vipin hello"},
//   "bhole bhai": {name: "bhole bhai", class: "vipin dghhhh"},
//   "prem bhai": {name: "prem bhai", class: "singh hello"},
//   "singh bhai": {name: "singh bhai", class: "vipin hello"},
//   "vipin bhai": {name: "vipin bhai", class: "vipin hello"},
// }

//When you do not use the second argument, the output will be something like
// {
//   "1": {name: "vipin bhai", class: "vipin hello"},
//   "2": {name: "bhole bhai", class: "vipin dghhhh"},
//   "3": {name: "prem bhai", class: "singh hello"},
//   "4": {name: "singh bhai", class: "vipin hello"},
//   "5": {name: "vipin bhai", class: "vipin hello"},
// }

const array = objectToArray(object);
// [
//     {name: "vipin bhai", class: "vipin hello"},
//     {name: "bhole bhai", class: "vipin dghhhh"},
//     {name: "prem bhai", class: "singh hello"},
//     {name: "singh bhai", class: "vipin hello"},
//     {name: "vipin bhai", class: "vipin hello"},
// ]
```