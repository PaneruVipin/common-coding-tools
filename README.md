# common-coding-tools

A brief description of the project and its purpose.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them. For example:

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
// Output: [{name: "prem bhai", class: "singh hello"}, {name: "singh bhai", class: "vipin hello"}]

