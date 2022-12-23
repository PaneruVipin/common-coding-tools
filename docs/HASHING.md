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
```

Here is an example of how to use the `verifyHash` function:
```javascript

const  confirm_pass1 = "1234567"
const  confirm_pass2 = "12345678"
const  verifyPassword = verifyHash(confirm_pass1, hashedPassword, 4)  // third args is same as makHash 2nd args
// output : true
const verifyPassword = verifyHash(confirm_pass2, hashedPassword, 4)  //always third args is same as makHash 2nd args
// output : false
```
