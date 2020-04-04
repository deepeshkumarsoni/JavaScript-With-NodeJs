// Creating a Global and Local Scope.

var name = "Deepesh";  // Global Variable Declaration.
function print(){
    var name = "Hello";
    console.log(name);  // Local Variable Declaration.
   // console.log(window.name);
}
print();
console.log(name);