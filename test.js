var randomIntRange = require('./index').randomIntRange;
var shuffle = require('./index').shuffle;

console.log(randomIntRange(0,0));
// result is 0

console.log(randomIntRange(0,1));
// result is 0 or 1

console.log(randomIntRange(2,2));
// result is 2

console.log(randomIntRange(3,7));
// result can be of of the values 3,4,5,6,7

console.log(shuffle([1,2]));
// result is [ 1, 2 ] or [ 2,1 ]

