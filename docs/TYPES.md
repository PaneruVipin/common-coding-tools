# common-coding-tools/types
The Types page has common functions related to type checking of variables

### Usage
Available Functions:
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
```

Here is an example of how to use the `type` function:
```javascript
const type1 = type({ name: "vipin" }) //output: "object"

const type2 = type([ "vipin", "paneru" ]) //output: "array"

const type3 = type(204) //output: "number"

const type4 = type(true) //output: "boolean"

```

Here is an example of how to use the/
`isString` `isNumber` `isObject` `isBoolean` `isEmail` and `isUrl`/ 
functions:
