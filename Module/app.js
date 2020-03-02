var print = require("./log");

//print.firstName();
//print.lastName();
print("Hello");
console.log(print);

const path = require('path');
var abc = path.parse(__filename);
console.log(abc);