 
## common-coding-tools/validation
The validation Method makes it easy to validate data.
Mostly used in API development, the work of validating the request.

```javascript

 npm install common-coding-tools@latest
 
 ```

### Usage
```javascript
import { validation, schema } from "common-coding-tools/validation"
```

How to use in Node.js project:
```javascript
import {validation} from "common-coding-tools/validation"

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


Here is an example of how to use the `validation` function:
```javascript
// Example - validation rule
const validator = {
       name: "string | required",
       email: "string | required | email | trim",
       password: "string | minLength: 8 | maxLength: 16",
       age:"number | range: 20-30"
}       
const data1 = {
      name: "vipin",
      password: "123456"
}
const data2 = {
      name: "vipin",
      password: "12345678"
      email: "vipin@"
}   
const data3 = {
      name: "vipin",
      password: "12345678",
      email: "vipin@vipin.in",
      age: "20"
}  
const data4 = {
      name: "vipin",
      password: "12345678",
      email: "vipin@vipin.in",
      age: 19
} 

const data5 = {
      name: "vipin",
      password: "12345678",
      email: "vipin@vipin.in",
}
const validate1 = validation(data1, validator)
// { errors: [
//    {feild: "email", message: "email is required feild"}
//     {feild: "password", message: "password length is to short, minimium length is 8"}
//  ]}

const validate2 = validation(data2, validator)
//  { errors: [
//     {feild: "email", message: "email must be a valid email"}
//  ]}

const validate3  =validation(data3, validator)
// { errors: [
//     {feild: "age", message: "age must be a number"}
//  ]}

const validate4 = validation(data4, validator)
//  { errors: [
//     {feild: "age", message: "age may be in the range of 20 to 30"}
//  ]}

const validate5 = validation(data5, validator)
//  { data: {
//       name: "vipin",
//       password: "12345678",
//      email: "vipin@vipin.in",
//   }}
```
\
\
\
All rules & tools Example:
```javascript
import { schema, validation } form "common-coding-tools/validation"

const userSchema={
       name: "string | required ",
       email: "string | required | email ",
       password: "string | minLength: 8 | maxLength: 16",
       age:"number "
  }
  
const validator = {
       name: "string | required | firstCharacterUpperCase", // firstCharacterUpperCase, firstCharacterLowerCase, allUpperCase, allLowerCase
       email: "string | required | email | trim", // removeAllWhiteSpace
       password: "string | minLength: 8 | maxLength: 16",
       age:"number | range: 20-30" , // It can also be used instead of range-- min: 20| max :30
       role: `defaultValue : ${schema( "user" )}`,
       created_at: `defaultValue : ${schema( new Date() )}`,
       updated_at: `defaultValue : ${schema( new Date() )}`,
       remember:`defaultValue: ${JSON.stringify(["user",new Date()])}`,
       users_array:`array: ${schema(userSchema)}`, // "array:any", "array:string", "array:any[]", "any{}"  ...etc.
       user_object:`object: $schema(userSchema)}`, //"aobject:any"
}
const user={
       name: "vipin paneru",
       email: "vipin@gmail.co",
       password: "12345678",
       age:10
}
const body={
  name: "pnaeru", // firstCharacterUpperCase, firstCharacterLowerCase, allUpperCase, allLowerCase
  email: "paneru@gmail.in", // removeAllWhiteSpace
  password: "hello@1234",
  age:25,
  users_array:[user],
  user_object:user
}
const data=validation( body, validator) 
//    "data": {
//      "name": "Vipin Paneru",
//      "email": "paneru@gmail.in",
//      "password": "hello@1234",
//       "age": 25,
//       "role": "user",
//       "created_at": "2022-12-23T18:28:51.000Z",
//       "updated_at": "2022-12-23T18:28:51.000Z",
//       "remember"  :[ "user", "2022-12-23T18:28:51.000Z" ]
//       "users_array": [
//              {
//                 "name": "vipin paneru",
//                 "email": "vipin@gmail.co",
//                 "password": "12345678",
//                "age": 10
//              }
//       ],
//      "user_object": {
//          "name": "vipin paneru",
//           "email": "vipin@gmail.co",
//            "password": "12345678",
//            "age": 10
//        }
//     }
   
```
