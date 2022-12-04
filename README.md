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

//Why this difference in output?
//Because you have changed the array of object keys. The priority is decided according to the position of the key. 
//For example, your object has three keys A, B and C. 
//If you want to give first priority to B, second to c and third priority to A, then write like this
//["B","A","C"]

const yourResult=search(yourArray,["B","A","C"],"your query")




