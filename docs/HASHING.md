## common-coding-tools/hashing
The Hashing page has common functions related to data encryption(hashing)

```javascript

 npm install common-coding-tools@latest
 
 ```

### Usage
Available Functions:
```javascript
import {
makeHash,
verifyHash
} from "common-coding-tools/hashing"
```

Here is an example of how to use the `makeHash` function:
```javascript

const password="1234567"
const hashedPassword = makeHash( password , 4) // second argument any number 
// output: 7101818432503545
// For more security of encryption use `.env` Secret number for 2nd argument
```

Here is an example of how to use the `verifyHash` function:
```javascript

const  confirm_pass1 = "1234567"
const  confirm_pass2 = "12345678"
const  verifyPassword = verifyHash(confirm_pass1, hashedPassword, 4)  // third args is same as makHash 2nd args
// output : true
const verifyPassword = verifyHash(confirm_pass2, hashedPassword, 4)  
// output : false
```
<!-- 


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
       role: "defaultValue: user",
       created_at:"defaultValue:"+ new Date(),
       updated_at:`defaultValue: ${JSON.stringify(["date",'24566'])}`,
       users_array:`array: ${JSON.stringify(userSchema)}`, // "array:any", "array:string", "array:any[]" ...etc.
       user_object:`object: ${JSON.stringify(userSchema)}`, //"aobject:any"
}
const user={
        name: "string",
       email: "vipi@gmail.co",
       password: "12345678",
       age:10
}
const body={
  ...user,
  age:25,
  users_array:[user],
  user_object:user
}
const data=validation({...body},validator)
console.log(data) -->
