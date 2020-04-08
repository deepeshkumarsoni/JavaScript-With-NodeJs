// Use of new keyword and it's importance. 

function Cat(){
    this.name = "Lissa",
    this.color = "Brown",
    this.speak = () => console.log("Meeooww");
}
/* Using 'new' keyword if we don't use the keyword then the function 
   return the object will directly goes into global scope (i.e window)
   it will not assign into variable.So,to assign return object to 
   variable we use 'new' keyword. */
let c = new Cat();   
console.log(c.name);
console.log(c.color);
c.speak();