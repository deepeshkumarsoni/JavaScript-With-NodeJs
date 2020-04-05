// Function Assigning to the variable.

var show = function(a,b)
{
    return a*b;
}
console.log(show(4,5));

// Arrow Function Assigning to the variable.

var print = (a,b) => 
{
    return a+b;
}
console.log(print(4,5));

//Arrow Function are also called Inline Function or Lamda Function.

var prints = (a,b) => console.log(a+b); 
console.log(print(4,5));
prints(7,5);