// Creating a Constructor.

function Person(fName,lName){    
        this.name = fName;
        this.surname = lName;

        this.fullName = () => console.log(fName+" "+lName);  // Arrow Function.

        // fullName = function () {
        //     console.log(this.fName+" "+this.lName);
        // }
}
var per = new Person("Deepesh","Soni");

console.log(per.name);

console.log(per.surname);

per.fullName();