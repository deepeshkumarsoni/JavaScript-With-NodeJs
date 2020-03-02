const os = require('os');

//Adding String by using concatenation operator
console.log("Total Memory :" + os.totalmem());
console.log("Free Memory :" + os.freemem());

//New Feature adding String without using concatenation operator
console.log(`Total Memory : ${os.totalmem()}`);
console.log(`Free Memory : ${os.freemem()}`);