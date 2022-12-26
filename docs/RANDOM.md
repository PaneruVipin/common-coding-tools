## common-coding-tools/random
The random page has common functions related to random data

```javascript

 npm install common-coding-tools@latest
 
 ```

### Usage
Available Functions:
```javascript
import {
randomString,
randomNumber,
randomData
} from "common-coding-tools/random"
```

Here is an example of how to use the `randomString` `randomNumber` function:
```javascript
randomString(6) // 6 is length
// output like this: "AdSRR4"  any 6 length string

randomNumber(40,0) // first argument is highestNumber and second is
// output like this: 23   -->. any number between 40 and 0
```

Here is an example of how to use the `randomData` function:
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
  const random = randomData(arr)
 // output like this:    {
 //                         "gender": "male",
 //                           "name": { "title": "Mr","first": "Stanislaw", "last": "Aanestad"
 //                           },
 //                           "email": "stanislaw.aanestad@example.com",
 //                       }
 // any random object of array
```
