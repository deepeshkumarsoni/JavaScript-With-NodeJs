// Creating a Constructor.

function Person(fName,lName){    
        this.name = fName;
        this.surname = lName;

        fullName = () => console.log(fName+" "+lName)

        // fullName = function () {
        //     console.log(this.fName+" "+this.lName);
        // }
}
var per = new Person("Deepesh","Soni");

console.log(per.name);

console.log(per.surname);

console.log(per.fullName);