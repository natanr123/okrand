This package gives a utility function for getting a random integer in range

Example of use:

```JavaScript
var randomIntRange = require('./index').randomIntRange;
console.log(randomIntRange(0,0));
// result is 0
console.log(randomIntRange(0,1));
// result is 0 or 1
console.log(randomIntRange(2,2));
// result is 2
console.log(randomIntRange(3,7));
// result can be of of the values 3,4,5,6,7
```