## common-coding-tools/validation
The validation Method makes it easy to validate data.
Mostly used in API development, the work of validating the request.

### Usage
```javascript
import { validation } from "common-coding-tools/validation"
```

How to use in Node.js project:
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
