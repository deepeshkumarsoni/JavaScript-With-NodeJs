// Creating an array.

var name = ["Deepesh","Chitrasen","Abhinav","Chaman","Shailendre","Bharat"];
 
for(var i=0; i<name.length; i++){
    console.log(name[i])
}
console.log(name.length);

name.push("Arvinder"); // push() add element at the end of the array.
 
for(var i=0; i<name.length; i++){
    console.log(name[i])
}
console.log(name.length);

name.unshift("Rajat"); // unshift() add element at the begining of the array. 

for(var i=0; i<name.length; i++){
    console.log(name[i])
}
console.log(name.length);

delete name[0];  // delete is used to remove element from specific position. 

for(var i=0; i<name.length; i++){
    console.log(name[i])
}
console.log(name.length);

name.pop();  // pop() remove the last element of an array.
 
for(var i=0; i<name.length; i++){
     console.log(name[i])
}
console.log(name.length);

// Creating Dictionary in JavaScript with key and value.

var fosterBoys = {name:"Deepesh",No:1}; 
console.log(fosterBoys);