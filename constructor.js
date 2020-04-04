// Creating a Constructor.

function person(fName,lName){
    this.name = fName;
    this.surname = lName;
    fullName = function(){
        console.log(fName+lName);
    }
}

var per = new person("Deepesh","Soni");
console.log(per.name);
console.log(per.surname);
console.log(per.fullName);