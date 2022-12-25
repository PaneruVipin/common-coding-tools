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

The `search` function takes 2 requied and 2 optional arguments: the array to search, the search query, an array of feild keys to search with priority, and ignoreList. It returns an array of objects that match the search query.

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

const results = search(arr, "vitly");
//  Output: [{
//    "gender": "male",
//    "name": {
//      "title": "Mr",
//      "first": "Vitaliy",
//      "last": "Nechay"
//    },
//    "email": "vitaliy.nechay@example.com"
//  }] 

//  optional arguments
//  with 3rd arguments --> 
// You can set priority with third arguments. Its priority is the index of the array in which the key will be written.
// if you want name >>>> gender >>> email       
// write like this

search(arr,"query", ["name","gender","email"]) // get output:

// with fourth argument ----> ignoreList
// EXAMPLE:
// you want to ignore email for search write like this

search(arr,"query",[], ["email"]) // get output:

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
const object = arrayToObject(arr, "name.first");
//    {
//        Vitaliy: {
//        gender: "amale",
//        name: {title: "Mr",first: "Vitaliy",last: "Nechay",},
//        email: "vitaliy.nechay@example.com",
//      },
//      Ceyhun: {
//        gender: "male",
//        name: {title: "Mr",first: "Ceyhun",last: "Tekelioğlu",},
//        email: "ceyhun.tekelioglu@example.com",
//      },
//      Pelle: {
//        gender: "male",
//        name: { title: "Mr", first: "Pelle",last: "Vestnes",},
//        email: "pelle.vestnes@example.com",
//      },
//      Stanislaw: {
//        gender: "male",
//        name: { title: "Mr",first: "Stanislaw",last: "Aanestad",},
//        email: "stanislaw.aanestad@example.com",
//      },
//      Esperanza: {
//        gender: "female",
//        name: { title: "Mrs",first: "Esperanza", last: "Colón",},
//        email: "esperanza.colon@example.com",
//      },
//    };

//When you do not use the second argument, the output will be something like
const object = arrayToObject(arr);
//    {
//        "1": {
//        gender: "amale",
//        name: {title: "Mr",first: "Vitaliy",last: "Nechay",},
//        email: "vitaliy.nechay@example.com",
//      },
//      "2": {
//        gender: "male",
//        name: {title: "Mr",first: "Ceyhun",last: "Tekelioğlu",},
//        email: "ceyhun.tekelioglu@example.com",
//      },
//      "3": {
//        gender: "male",
//        name: { title: "Mr", first: "Pelle",last: "Vestnes",},
//        email: "pelle.vestnes@example.com",
//      },
//      "4": {
//        gender: "male",
//        name: { title: "Mr",first: "Stanislaw",last: "Aanestad",},
//        email: "stanislaw.aanestad@example.com",
//      },
//      "5": {
//        gender: "female",
//        name: { title: "Mrs",first: "Esperanza", last: "Colón",},
//        email: "esperanza.colon@example.com",
//      },
//    };

const array = objectToArray(object);
//    [
//           {
//               "gender": "male",
//               "name": { "title": "Mr",  "first": "Vitaliy", "last": "Nechay" },
//               "email": "vitaliy.nechay@example.com",
//           },
//           {
//               "gender": "male",
//               "name": { "title": "Mr", "first": "Ceyhun", "last": "Tekelioğlu"  },
//               "email": "ceyhun.tekelioglu@example.com",
//           },
//           {
//               "gender": "male",
//               "name": { "title": "Mr", "first": "Pelle", "last": "Vestnes"
//               },
//               "email": "pelle.vestnes@example.com",
//           },
//           {
//               "gender": "male",
//               "name": { "title": "Mr","first": "Stanislaw", "last": "Aanestad"
//               },
//               "email": "stanislaw.aanestad@example.com",
//           },
//           {
//               "gender": "female",
//               "name": { "title": "Mrs",  "first": "Esperanza",  "last": "Colón"},
//               "email": "esperanza.colon@example.com",
//           }
//       ]
```
