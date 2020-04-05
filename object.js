// Declaring the Object with properties.

var person = {
    fName : "Deepesh",
    lName : "Soni",
    color : "Fair",
    city : "Chattisgarh",
    fullName : function(){
        console.log(this.fName+" "+this.lName);
    },
    msg : () => console.log(person.city)  //arrow function.
};
console.log(person);
person.fullName();
person.msg();