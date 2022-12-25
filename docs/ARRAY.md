## common-coding-tools/array
This array page is a collection of common utility functions that can be used while working with JavaScript and JavaScript frameworks. The library contains functions for working with arrays, such as search, descending, and ascending, as well as functions for converting between arrays and objects. To use the library, you can install it via npm by running npm install common-coding-tools. You can then import or require individual functions from the library to use in your code. For example, you can use the search function to search an array of objects for specific values, the descending function to sort an array in descending order, and the ascending function to sort an array in ascending order. Additionally, the arrayToObject and ObjectToArray functions can be used to convert between arrays and objects.

```javascript

 npm install common-coding-tools@latest
 
 ```

### Usage
Available Functions:
```javascript
import { 
search,
descending,
ascending,
arrayToObject,
ObjectToArray
} from "common-coding-tools/array"
```

The `search` function takes three arguments: the array to search, an array of object keys to search, and the search query. It returns an array of objects that match the search query.

Here is an example of how to use the `search` function:
```javascript
const arr = [
        {
            "gender": "male",
            "name": { "title": "Mr",  "first": "Vitaliy", "last": "Nechay" },
            "email": "vitaliy.nechay@example.com",
        },
        {
            "gender": "male",
            "name": { "title": "Mr", "first": "Ceyhun", "last": "Tekelioğlu"  },
            "email": "ceyhun.tekelioglu@example.com",
        },
        {
            "gender": "male",
            "name": { "title": "Mr", "first": "Pelle", "last": "Vestnes"
            },
            "email": "pelle.vestnes@example.com",
        },
        {
            "gender": "male",
            "name": { "title": "Mr","first": "Stanislaw", "last": "Aanestad"
            },
            "email": "stanislaw.aanestad@example.com",
        },
        {
            "gender": "female",
            "name": { "title": "Mrs",  "first": "Esperanza",  "last": "Colón"},
            "email": "esperanza.colon@example.com",
        }
    ]

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
const sortedArr = descending(arr, "name.first"); 
//   [
//     {
//       gender: "amale",
//       name: { title: "Mr",first: "Vitaliy", last: "Nechay",},
//       email: "vitaliy.nechay@example.com",
//     },
//     {
//       gender: "male",
//       name: {title: "Mr", first: "Stanislaw",last: "Aanestad",},
//       email: "stanislaw.aanestad@example.com",
//     },
//     {
//       gender: "male",
//       name: { title: "Mr",first: "Pelle",last: "Vestnes",},
//       email: "pelle.vestnes@example.com",
//     },
//     {
//       gender: "female",
//       name: {title: "Mrs",first: "Esperanza",last: "Colón",},
//      email: "esperanza.colon@example.com",
//     },
//     {
//      gender: "male",
//      name: { title: "Mr",first: "Ceyhun",last: "Tekelioğlu",},
//       email: "ceyhun.tekelioglu@example.com",
//     },
//   ];

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
