d// Creating an array.

 var name = ["Deepesh","Chitrasen","Abhinav","Chaman","Shailendre","Bharat"];
 
 name.push("Arvinder"); // push() add element at the end of the array.
 
 name.unshift("rajat"); // unshift() add element at the begining of the array. 
 
 delete name[0];  // delete is used to remove element from specific position. 
 
 name.pop();  // pop() remove the last element of an array.
 
 console.log(name.length);
 
 for(var i=0; i<=name.length; i++){
     console.log(name[i])
 }


var fosterBoys = {name:"Deepesh",No:1}; // Dictionary in JavaScript with key and value.
console.log(fosterBoys);