# common-coding-tools

While working with JavaScript and JavaScript Framework, many hooks have to be made which are common, \
so they are all present here in the same library, so use them and avoid time and code repetition. 


## Getting Started
```javascript
npm install common-coding-tools
```


### Usage
We have divided the first common-coding-tools into 4 pages based on their different categories so that it is easy to use.

- [Data Fitlerization](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/ARRAY.md#common-coding-toolsarray)    Methods: `search` `descending` `ascending` `arrayToObject` `ObjectToArray`
- [Data Validation](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/VALIDATE.md#common-coding-toolsvalidation)  Methods: `validation` `schema` 
- [Type Checking](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/TYPES.md#common-coding-toolstypes)        Methods: `isString` `isNumber` `isObject` `isArray` `isBoolean` `isEmail` `isUrl` `type`
- [String Methods](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/STRING.md#common-coding-toolsstring)      Methods: `lowerCase` `upperCase`
- [Hashing](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/HASHING.md#common-coding-toolshashing)      Methods: `makeHash` `verifyHash`
- [Random](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/RANDOM.md#common-coding-toolsrandom)      Methods: `randomString` `randomNumber` `randomData`


Here is an example of how to use the `search` function:
```javascript
import { search } from "common-coding-tools/array"

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

```

more example for `"common-coding-tools/array"` [`Click`](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/ARRAY.md#common-coding-toolsarray) here\
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
import { validation, schema } from "common-coding-tools/validation"

const signupValidator={
       name: "string | required",
       email: "string | required | email | trim",
       password: "string | minLength: 8 | maxLength: 16",
       age: "number | range: 20-100",
       role: `defaultValue : ${schema( "user" )}`,
       created_at: `defaultValue : ${schema( new Date() )}`,
       updated_at: `defaultValue : ${schema( new Date() )}`,
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
more example for `"common-coding-tools/validation"` [`Click`](https://github.com/PaneruVipin/common-coding-tools/blob/main/docs/VALIDATE.md#common-coding-toolsvalidation) here
\
\
\
Here is an example of `hashing`:
```javascript

import {
makeHash,
verifyHash
} from "common-coding-tools/hashing"

const password="1234567"
const hashedPassword = makeHash( password , 4) // second argument any number 
// output: 7101818432503545
// For more security of encryption use `.env` Secret number for 2nd argument

const  confirm_pass1 = "1234567"
const  confirm_pass2 = "12345678"
const  verifyPassword = verifyHash(confirm_pass1, hashedPassword, 4)  // third args is same as makHash 2nd args
// output : true
const verifyPassword = verifyHash(confirm_pass2, hashedPassword, 4)  
// output : false
```
\
\
\
Here is an example of how to use the `randomString` `randomNumber` function:
```javascript
import {
randomString,
randomNumber,
randomData
} from "common-coding-tools/random"


randomString(6) // 6 is length
// output like this: "AdSRR4"  any 6 length string

randomNumber(40,0) // first argument is highestNumber and second is
// output like this: 23   -->. any number between 40 and 0
```

