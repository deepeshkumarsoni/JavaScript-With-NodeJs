// Function Assigning to the variable.

var show = function(a,b)
{
    return a*b;
}

// Arrow Function Assigning to the variable.

var print = (a,b) => 
{
    return a+b;
}
var print = (a,b) => console.log(a+b); //Arrow Function are also called Inline Function or Lamda Function.

console.log(show(4,5));                
console.log(print(4,5));
print(7,5);