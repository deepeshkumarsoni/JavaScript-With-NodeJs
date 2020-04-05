// Creating a Global and Local Scope.

var name = "Deepesh";  // Global Variable Declaration.
function print(){
    var name = "Hello";
    console.log(name);  // Local Variable Declaration.
    console.log(global);  // Calling Global Variable inside the function scope.
}
print();
