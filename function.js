// Simple Function Declaration.

function print(){
    console.log("Hello Deepesh");
}
print();

// Immediate Invoked Function Expression.

(function print(msg)
{
    console.log("Hello"+" "+msg);    
})("Deepesh");

// Functions With Argument.

function name(msg,fname){
    console.log(msg+" "+fname+"\n");
}
name("Hello","Deepesh");

// Nested Function.

function name(msg){
   // var fName = "Deepesh";
    function fullName(){
        var lName = "Soni";
        console.log("Hii "+msg+" "+lName);
    }     
    return fullName(); 
}
name("Deepesh");
