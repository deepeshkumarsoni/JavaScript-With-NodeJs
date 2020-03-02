const path = require('path');
console.log(path.parse(__dirname));
console.log(path.parse(__filename));
console.log(path.isAbsolute('./firstProgram'));