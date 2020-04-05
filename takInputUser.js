// Taking Argument from the cmd line by using slice() and argv[] array.


var num = +process.argv[2];  // .slice(2);
console.log('argv\n',process.argv);
console.log('input number\n',num);
var result = num % 2;
if(result === 0)
{
    console.log(num + " :is an even number.");
}
else{
    console.log(num + " :is an odd number.");
}

// Multiplication of number.

// var a = +process.argv.slice(2,3);
// var b = +process.argv.slice(3,4);

var a = +process.argv[2];
var b = +process.argv[3];

console.log('argv\n',process.argv); // argv is an array.

console.log('input number\n',a);

console.log('input number\n',b);

console.log(a*b);

