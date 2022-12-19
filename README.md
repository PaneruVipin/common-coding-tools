# common-coding-tools

While working with JavaScript and JavaScript Framework, many hooks have to be made which are common, \
so they are all present here in the same library, so use them and avoid time and code repetition.

## Getting Started
```javascript
npm install common-coding-tools
```


### Usage
We have divided the first common-coding-tools into 4 pages based on their different categories so that it is easy to use.

- [Data Fitlerization](https://github.com/PaneruVipin/common.md/blob/main/array.md#common-coding-toolsarray)    Methods: `search` `descending` `ascending` `arrayToObject` `ObjectToArray`
- [Data Validation](https://github.com/PaneruVipin/common.md/blob/main/validation.md#common-coding-toolsvalidation)
- [Type Checking](https://github.com/PaneruVipin/common.md/blob/main/types.md#common-coding-toolstypes)        Methods: `isString` `isNumber` `isObject` `isArray` `isBoolean` `isEmail` `isUrl` `type`
- [String Methods](https://github.com/PaneruVipin/common.md/blob/main/string.md#common-coding-toolsstring)      Methods: `lowerCase` `upperCase`


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

more example for `"common-coding-tools/array"` [`Click`](https://github.com/PaneruVipin/common.md/blob/main/array.md#common-coding-toolsarray) here\
\
\
\
Here is an example of how to use the `upperCase` and `lowerCase` function:
```javascript
import {
lowerCase,
upperCase,
} from "common-coding-tools/string"

console.log(upperCase().all("vipin"))  // "VIPIN"
console.log(upperCase().firstCharacter("vipin"))  // "Vipin"

console.log(lowerCase().all("VIPIN"))  // "vipin"
console.log(lowerCase().firstCharacter("VIPIN"))  // "vIPIN"

```
\
\
\
\
Here is an example of how to use the \
`type` `isString` `isNumber` `isObject` `isBoolean` `isEmail` and `isUrl` \
functions:
```javascript
import {
isString,
isNumber,
isObject,
isArray,
isBoolean,
isEmail,
isUrl,
type
} from "common-coding-tools/types"

const type1 = type({ name: "vipin" }) //output: "object"

const type2 = type([ "vipin", "paneru" ]) //output: "array"

const type3 = type(204) //output: "number"

const type4 = type(true) //output: "boolean"

console.log( isString( "vipin" )) //true
console.log( isString( 402 ))   //false

console.log( isEmail( "vipin" )) //false
console.log( isEmail( "vipin@vipin.in" )) //true

console.log( isObject({ name: "vipin", email: "vipin@vipin.in" })) //true
console.log( isObject([ "vipin", "vipin@vipin.in" ]))   //false

console.log( isArray({ name: "vipin", email: "vipin@vipin.in" })) //false
console.log( isArray([ "vipin", "vipin@vipin.in" ]))   //true

console.log( isUrl("vipin@vipin.in")) //false
console.log( isUrl("https://paneruvipin.com"))   //true
```
\
\
\

Here is an example of how to use the `validation` function:
```javascript
import {validation} from "common-coding-tools/validation"

const signupValidator={
       name: "string | required",
       email: "string | required | email | trim",
       password: "string | minLength: 8 | maxLength: 16",
       age:"number | range: 20-30"
}

router.post("/signup", (req,res,next)=>{
const data= validation(req.body, signupvalidator)

if(data?.errors){
const errors=data.errors
// use errors
}else{
const validatedData=data.data
// use validatedData
// write your code here
}
})
```




