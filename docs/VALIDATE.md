## common-coding-tools/validation
The validation Method makes it easy to validate data.
Mostly used in API development, the work of validating the request.

### Usage
```javascript
import { validation } from "common-coding-tools/validation"
```

Here is an example of how to use the `validation` function:
```javascript
// Example - validation rule
const validator = {
       name: "string | required",
       email: "string | required | email | trim",
       password: "string | minLength: 8 | maxLength: 16",
       age:"string | range: 2-3"
}       
      
       
