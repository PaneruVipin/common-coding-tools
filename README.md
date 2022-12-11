# common-coding-tools

While working with JavaScript and JavaScript Framework, many hooks have to be made which are common, so they are all present here in the same library, so use them and avoid time and code repetition.

## Getting Started
```javascript
npm install common-coding-tools
```


### Usage

#### Example "common-coding-tools/array"

This array page is a collection of common utility functions that can be used while working with JavaScript and JavaScript frameworks. The library contains functions for working with arrays, such as `search`, `descending`, and `ascending`, as well as functions for converting between arrays and objects. To use the library, you can install it via npm by running `npm install common-coding-tools`. You can then import or require individual functions from the library to use in your code. For example, you can use the search function to search an array of objects for specific values, the descending function to sort an array in descending order, and the ascending function to sort an array in ascending order. Additionally, the `arrayToObject` and `ObjectToArray` functions can be used to convert between arrays and objects.

Here is an example of how to use the `search` function:

```javascript
import { search, descending, arrayToObject, objectToArray } from "common-coding-tools/array"

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
// const yourResult=search(yourArray,["B","A","C"],"your query")

const sortedArr = descending(arr, "name");
//output: [
//   {name: "vipin bhai", class: "vipin hello"},
//   {name: "vipin bhai", class: "vipin hello"},
//   {name: "singh bhai", class: "vipin hello"},
//   {name: "prem bhai", class: "singh hello"},
//   {name: "bhole bhai", class: "vipin dghhhh"},
// ]
// Convert the array into an object using the name property as the keys
const object = arrayToObject(arr, "name"); //output
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
//output: [
//     {name: "vipin bhai", class: "vipin hello"},
//     {name: "bhole bhai", class: "vipin dghhhh"},
//     {name: "prem bhai", class: "singh hello"},
//     {name: "singh bhai", class: "vipin hello"},
//     {name: "vipin bhai", class: "vipin hello"},
// ]
```
Other examples:
```javascript
import { ascending, descending } from "common-coding-tools/array"

const arr1 = [5, 2, 8, 1, 9];
// Sort the array in descending order using the default comparison function
const sortedArr = descending(arr1); // [9, 8, 5, 2, 1]

const arr2 = ["a", "c", "d", "f", "b"];
// Sort the array in ascending order using the default comparison function
const sortedArr = ascending(arr2); // ["a","b","c","d","f"]
```








